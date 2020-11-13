import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ setSearch }) => {

    // States
    const [inputValues, setInputValues] = useState({
        artist: '',
        title: ''
    })
    const [error, showError] = useState(false)

    // Destructuring
    const { artist, title } = inputValues

    const handleChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (artist.trim() === '' || title.trim() === '') {
            showError(true)
            return
        }

        showError(false)
        setSearch(inputValues)
    }

    return (
        <div className='bg-info'>
            <div className='container'>
            {error && <p className='alert alert-danger text-center p-2'>
                All fields requiered</p> }
                <div className='row'>
                    <form
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className='text-center'>Song lyrics finder</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artist</label>
                                        <input 
                                            type='text'
                                            name='artist'
                                            value={artist}
                                            className='form-control'
                                            placeholder='Artist name'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Song</label>
                                        <input 
                                            type='text'
                                            name='title'
                                            value={title}
                                            className='form-control'
                                            placeholder='Song title'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

// Documentation
Form.propTypes = {
    setSearch: PropTypes.func.isRequired
}

export default Form
