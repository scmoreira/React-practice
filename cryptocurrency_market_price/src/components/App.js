import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Form from './Form'
import Quotation from './Quotation'
import Spinner from './shared/Spinner'

import image from '../cryptomonedas.png'
import styled from '@emotion/styled'

// Styling component
const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #ffffff;
  font-weight: 700;
  font-size: 50px;
  text-align: left;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height:6px;
    background-color: #66A2FE;
    display: block;
  }
`

function App() {

  // States
  const [currency, setCurrency] = useState('')
  const [cryptoCurrency, setCryptoCurrency] = useState('')
  const [quotation, setQuotation] = useState({})
  const [request, setRequest] = useState(false)
  const [loading, setLoading] = useState(false)

  // API request
  const apiRequest = async () => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
    const response = await axios.get(url)

    setLoading(true)

    // Get API response
    setTimeout(() => {

      setLoading(false)
      setQuotation(response.data.DISPLAY[cryptoCurrency][currency])

    }, 2000)
}

  // Update states
  useEffect(() => {
    if (request) {
      apiRequest()
      setRequest(false)
    }
    // eslint-disable-next-line
  }, [currency, cryptoCurrency, request])

  return (
    <Container>
      <div>
        <Image src={image} alt='Cryptocurrency images' />
      </div>
      <div>
        <Heading>Cryptocurrency market price</Heading>
        <Form 
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
          setRequest={setRequest}
        />
        { loading ? <Spinner /> : <Quotation quotation={quotation} /> }
      </div>
    </Container>
  )
}

export default App