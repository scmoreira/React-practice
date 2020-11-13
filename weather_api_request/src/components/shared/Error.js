import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => <p className='red darken-4 error'>{message}</p>

// Documentation
Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error