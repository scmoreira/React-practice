import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

import { capitalizeText } from '../helper'

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffffff;
    margin-top: 1rem;
`

const Summary = ({ data }) => {
    
    // Destructuring
    const { brand, year, coverage } = data
    
    return (
        <SummaryContainer>
            <h2>Quote Summary</h2>
            <ul>
                <li>Car Brand: {capitalizeText(brand)}</li>
                <li>Car Year: {year}</li>
                <li>Coverage Plan: {capitalizeText(coverage)}</li>
            </ul>
        </SummaryContainer>
    )
}

// Documentation
Summary.propTypes = {
    data: PropTypes.object.isRequired
}

export default Summary