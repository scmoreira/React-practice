import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'

const ErrorMessage = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #ffffff;
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`

const Error = ({ message }) => {
    return (
        <ErrorMessage>{message}</ErrorMessage> 
    )
}

// Documentation
Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error