import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

// Styling component with Emotion
const QuoteContainer = styled.div`
    padding: 3rem;
    max-width: 800px;
    background-color: #ffffff;
    border-radius: .5rem;
    margin-top: 5rem;

    @media (min-width: 992px) {
        margin-top: 8rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        text-align: center;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 8rem;
            color: black;
            position: absolute;
            top: -2rem;
            left: -1rem;
        }
    }

    p {
       font-family: Verdana, Geneva, Tahoma, sans-serif;
       font-size: 1.4rem;
       color: #666;
       margin-top: 2rem;
       text-align: right; 
    }

`

const Quote = ({quote}) => {
    return ( 
        <QuoteContainer>
            <h1>{quote.quote}</h1>
            <p>- {quote.author}</p>
        </QuoteContainer>
        
    )
}

// Documentation
Quote.propTypes = {
    quote: PropTypes.object.isRequired
}

export default Quote