import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

// Styling component
const ResultDiv = styled.div`
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;

    p {
        span {
            font-weight: bold;
        }
    }
`
const Price = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`

const Quotation = ({ quotation }) => {
    
    if (Object.keys(quotation).length === 0) return null

    return (
        <ResultDiv>
            <Price>Current price: <span>{quotation.PRICE}</span></Price>
            <p>Highest price of the day: <span>{quotation.HIGHDAY}</span></p> 
            <p>Lowest price of the day: <span>{quotation.LOWDAY}</span></p> 
            <p>Viariation last 24hs: <span>{quotation.CHANGEPCT24HOUR}</span></p> 
            <p>Last update: <span>{quotation.LASTUPDATE}</span></p> 
        </ResultDiv>
    )
}

// Documentation
Quotation.propTypes = {
    quotation: PropTypes.object.isRequired
}

export default Quotation