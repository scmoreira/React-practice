import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Error from './shared/Error'

const Form = ({search, setSearch, setRequest}) => {

    // State
    const [error, setError] = useState(false)
    
    // Destructuring
    const { city, country, unit } = search

    // Passing values to main component
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    // Submit the request
    const handleSubmit = e => {
        e.preventDefault()

        //Validation
        if (city.trim() === '' || country.trim() === '' || unit.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        setRequest(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {error && <Error message='All fields required' />}
            
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='city'
                    id='city'
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor='city'>City</label>
            </div>
            <div className='input-field col s12'>
                <select
                    name='country'
                    id='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value=''>--Select a Country --</option>
                    <option value="AR">Argentina</option>
                    <option value="ES">Spain</option>
                    <option value="IT">Italy</option>
                    <option value="GB">United Kingdom</option>
                </select>
                <label htmlFor='country'>Country</label>
            </div>
            <p className='radios'>
                <label>Temperature unit</label>
                <label>
                    <input
                        type='radio'
                        className='with-gap'
                        name='unit'
                        value='standard'
                        checked={unit === 'standard'}
                        onChange={handleChange}
                    /> 
                    <span>Kelvin</span>
                </label>
                <label>
                    <input
                        type='radio'
                        className='with-gap'
                        name='unit'
                        value='metric'
                        checked={unit === 'metric'}
                        onChange={handleChange}
                    />
                    <span>Celsius</span>
                </label>
                <label>
                    <input
                        type='radio'
                        className='with-gap'
                        name='unit'
                        value='imperial'
                        checked={unit === 'imperial'}
                        onChange={handleChange}
                    /> 
                    <span>Fahrenheit</span>
                </label>
            </p>
            <div className='col s12'>
                <button type='submit' className='btn waves-effect waves-light blue darken-3' >Submit
                    <i className="material-icons right">send</i> 
                </button>
            </div>
        </form>
    )
}

// Documentation
Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired
}

export default Form
