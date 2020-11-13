import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Error from './shared/Error'

const Form = ({ setSearch }) => {
    
    //States
    const [term, setTerm] = useState('')
    const [error, showError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        // Validation
        if(term.trim() === '') {
            showError(true)
            return
        }
        showError(false)

        // Pass the term search to the App component
        setSearch(term)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search an image, ex: coffee"
                        onChange={ e => setTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-dark btn-block"
                        value="Search"
                    />
                </div>
            </div>

            { error && <Error message="Add a search term" /> }
        </form>
    )
}

//Documentation
Form.propTypes = {
    setSearch: PropTypes.func.isRequired
}
 
export default Form