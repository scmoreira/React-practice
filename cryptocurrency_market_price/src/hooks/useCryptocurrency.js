import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

// Styling component
const Label = styled.label`
    display: block;
    margin-top: 2rem;
    font-family: 'Bebas Neue', cursive;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.2rem;
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    --webkit-appearance: none;
    font-size: 1.2rem;
`

const useCryptocurrency = (label, initialState, cryptoCurrencies) => {

    // State
    const [crypto, setCrypto] = useState(initialState)
    
    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setCrypto(e.target.value)}
                value={crypto}
            >
                <option value=''>-- Select --</option>
                {cryptoCurrencies.map(crypto => 
                    <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.Name} - {crypto.CoinInfo.FullName}</option>
                )}
            </Select>
        </Fragment>
    )

    return [crypto, SelectCrypto, setCrypto] 
}

// Documentation
useCryptocurrency.propTypes = {
    label: PropTypes.string.isRequired,
    initialState: PropTypes.string.isRequired,
    cryptoCurrencies: PropTypes.array.isRequired
}

export default useCryptocurrency