import React, { Fragment, useState, useEffect } from 'react'

import Header from './Header'
import Form from './Form'
import NewsList from './NewsList'

function App() {

  // States
  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])

  // API request
  const apiRequest = async () => {

    const apiKey = 'YourApiKeyHere'
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`

    const response = await fetch(url)
    const result = await response.json()

    setNews(result.articles)
  }

  useEffect(() => {
    
    apiRequest()

  }, [category])

  return (
    <Fragment>
        <Header 
          title='News searcher'
        />

        <div className="container white">
            <Form
              setCategory={setCategory}
            />

            <NewsList 
              news={news}
            />
        </div>
    </Fragment>
  )
}

export default App