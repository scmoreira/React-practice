import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const QuoteContainer = styled.div`
    position: relative;
    text-align: center;
    padding: .5rem;
    margin-top: 1rem;
    background-color: rgb(127, 224, 237);
    border: 1px solid #26C6DA;
`
const QuoteText = styled.p`
    color: #00838F;
    padding: 1rem;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
`

const Total = ({ quote }) => {

    return (
        <QuoteContainer>
            <TransitionGroup component='span' className='result'>
                <CSSTransition
                    classNames='result'
                    key={quote}
                    timeout= {{enter: 500, exit: 500}}
                >
                    <QuoteText>Total: € <span>{quote}</span></QuoteText>
                </CSSTransition>
            </TransitionGroup>
        </QuoteContainer>
    )
}

// Documentation
Total.propTypes = {
    quote: PropTypes.number.isRequired
}

export default Total