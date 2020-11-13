import React, { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import Quote from './Quote'

// Styling component with Emotion
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`
const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: #ffffff;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`

function App() {

  // States
  const [quote, setQuote] = useState({})

  // API Request
  const apiRequest = async () => {

    const request = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const quote = await request.json()
    setQuote(quote[0])

    // Without async we need to use .then
    // const apiRequest = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    // const quote = apiRequest.then(res => res.json())
    // quote.then(res => setQuote(quote[0]))
    
  }

  // First quote
  useEffect( () => {
    apiRequest()
  }, [])

  return (
    <Container>
      <Quote quote={quote} />
      <Button onClick={ apiRequest }>Get Quote</Button>
    </Container>
  )
}

export default App
