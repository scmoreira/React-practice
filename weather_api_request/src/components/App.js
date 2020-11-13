import React, { Fragment, useState, useEffect } from 'react'

import Header from './shared/Header'
import Error from './shared/Error'
import Form from './Form'
import Weather from './Weather'


function App() {

  // State 
  const [search, setSearch] = useState({
    city: '',
    country: '',
    unit:''
  }) 
  const [request, setRequest] = useState(false)
  const [weatherData, setWeatherData] = useState({})
  const [error, setError] = useState(false)

  // Destructuring
  const { city, country, unit } = search

  // API request
  const apiRequest = async () => {

    const apiId = 'YourApiIdHere'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}&units=${unit}`
    const response = await fetch(url)
    const result = await response.json()

    // Check for errors
    if (result.cod === '404') {
      setError(true)
    } else {
      setError(false)
    }
    
    // Save the data 
    setWeatherData(result)
  }
  
  // Update
  useEffect(() => {
    if (request) {
      apiRequest()
      setRequest(false)
    }
    // eslint-disable-next-line
  }, [request])
  
  return (
    <Fragment>
      <Header title='Weather forecast' />

      <div className='container-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form 
                search={search}
                setSearch={setSearch}
                setRequest={setRequest}
              />
            </div>
            <div className='col m6 s12'>
              {error ?
                <Error message='Result not found' /> 
               :
                <Weather
                  unit={search.unit}
                  weatherData={weatherData} 
                />
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
