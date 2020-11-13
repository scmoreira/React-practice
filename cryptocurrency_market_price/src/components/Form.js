import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import useCurrency from '../hooks/useCurrency'
import useCryptocurrency from '../hooks/useCryptocurrency'
import Error from './shared/Error'

import styled from '@emotion/styled'

// Styling component
const Button = styled.button`
    margin-top: 20px;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Form = ({ setCurrency, setCryptoCurrency, setRequest }) => {

    // State
    const [cryptoCurrencies, setCryptoCurrencies] = useState([])
    const [error, showError] = useState(false)

    // Currency options
    const Currencies = [
        { code: 'ARS', name: 'Argentine Peso' },
        { code: 'CNY', name: 'Chinese Yuan' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Pound Sterling' },
        { code: 'RUB', name: 'Russian Ruble' },
        { code: 'USD', name: 'U.S. Dollar' },
    ]

    // Using Custom Hooks
    const [currency, SelectCurrency] = useCurrency('Select your currency', '', Currencies)
    const [crypto, SelectCrypto] = useCryptocurrency('Select your cryptocurrency', '', cryptoCurrencies)

    // API request
    const apiRequest = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const result = await axios.get(url)
        setCryptoCurrencies(result.data.Data)
    }
 
    // Update state
    useEffect (() => {
        apiRequest()
    }, [])

    // Submit request
    const handleSubmit = e => {
        e.preventDefault()

        // Validation
        if (currency === '' || crypto === '') {
            showError(true)
            return
        }

        showError(false)

        // Passing values to main component
        setCurrency(currency)
        setCryptoCurrency(crypto)
        setRequest(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {error && <Error message='All fields required' />}

            <SelectCurrency />
            <SelectCrypto />
            <Button type='submit'>Calculate</Button>
        </form>
    )
}

// Documentation
Form.propTypes = {
    setCurrency: PropTypes.func.isRequired,
    setCryptoCurrency: PropTypes.func.isRequired,
    setRequest:PropTypes.func.isRequired
}

export default Form