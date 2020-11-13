import React, { useState } from 'react'
import PropTypes from 'prop-types'

const useSelect = (initialState, options) => {

    // State
    const [state, setState] = useState(initialState)

    const NewsSelect =  () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
    return [state, NewsSelect]
}

// Documentation
useSelect.propTypes = {
    initialState: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}
 
export default useSelect