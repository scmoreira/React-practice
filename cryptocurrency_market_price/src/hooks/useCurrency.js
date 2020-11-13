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

const useCurrency = (label, initialState, Currencies) => {

    // State
    const [currency, setCurrency] = useState(initialState)
    
    const SelectCurrency = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setCurrency(e.target.value)}
                value={currency}
            >
                <option value=''>-- Select --</option>
                {Currencies.map(currency => 
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                )}
            </Select>
        </Fragment>
    )

    return [currency, SelectCurrency, setCurrency] 
}

// docuemntation
useCurrency.propTypes = {
    label: PropTypes.string.isRequired,
    initialState: PropTypes.string.isRequired,
    Currencies: PropTypes.array.isRequired
}

export default useCurrency