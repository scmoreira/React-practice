import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

import Form from './Form'
import Lyric from './Lyric'
import Info from './Info'

function App() {

  // States
  const [search, setSearch] = useState({})
  const [lyric, setLyric] = useState('')
  const [info, setInfo] = useState({})
  const [error, showError] = useState(false)

  // Destructuring
  const { artist, title } = search
  
  // API's request
  const apiRequest = async () => {

    const lyricUrl = `https://api.lyrics.ovh/v1/${artist}/${title}`
    const infoUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    
    // const [lyric, info] = await Promise.all([
    //   axios(lyricUrl),
    //   axios(infoUrl)
    // ])
    // setLyric(lyric.data.lyrics)
    // setInfo(info.data.artists[0])

    // Better way to handle any error
    axios.all([
      axios(lyricUrl),
      axios(infoUrl)
    ])
      .then(axios.spread((lyric, info) => {
        setLyric(lyric.data.lyrics)
        setInfo(info.data.artists[0])
      }))
      .catch(err => showError(true))
    
    showError(false)
 }

  // Update state
  useEffect(() => {

    if (Object.keys(search).length === 0) return
    
    apiRequest()

  }, [search])

  return (
    <Fragment>
      <Form setSearch={setSearch} />

      {error ? <p>Oops! Failed request... Please, try again.</p> :
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              {(lyric.length > 0) && <Info info={info} />}
            </div>
            <div className='col-md-6'>
              {(lyric.length > 0) &&
                <>
                <h2>{title.toUpperCase()}</h2>
                <Lyric lyric={lyric} />
                </>
              }
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default App
