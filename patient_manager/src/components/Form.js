import React, { Fragment, useState } from "react"
import PropTypes from 'prop-types'

import { v4 as uuidv4 } from 'uuid'

const Form = ({addAppointment}) => {

    // States
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    })
    const [error, setError] = useState(false)

    // Input control
    const handleChange = event => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        })
    }

    // Destructuring
    const { pet, owner, date, time, symptoms } = appointment

    // Submit form
    const handleSubmit = event => {
        event.preventDefault()

        // Validation
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
           setError(true)
            return
        }

        setError(false)

        // Generate Id using uuid library
        appointment.id = uuidv4()

        // Create appointment
        addAppointment(appointment)

        // Reset the form
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }
    
    return (
        
        <Fragment>
            
            { error ? <p className='alert-error'>All fields required</p> : null}

            <form onSubmit={handleSubmit}>
                <label>Pet Name</label>
                <input 
                    type='text'
                    name='pet'
                    className='u-full-width'
                    placeholder='Pet Name'
                    value={pet}
                    onChange={handleChange}
                />
                <label>Pet owner's name</label>
                <input 
                    type='text'
                    name='owner'
                    className='u-full-width'
                    placeholder="Pet owner's name"
                    value={owner}
                    onChange={handleChange}
                />
                <label>Date</label>
                <input 
                    type='date'
                    name='date'
                    className='u-full-width'
                    value={date}
                    onChange={handleChange}
                />
                <label>Time</label>
                <input 
                    type='time'
                    name='time'
                    className='u-full-width'
                    value={time}
                    onChange={handleChange}
                />
                <label>Symptoms</label>
                <textarea 
                    name='symptoms'
                    className='u-full-width'
                    value={symptoms}
                    onChange={handleChange}
                ></textarea>
                <button type='submit' className='button u-full-width'>
                    Confirm
                </button>
            </form>

        </Fragment>
    )
}

// Documentation
Form.propTypes = {
    addAppointment: PropTypes.func.isRequired
}

export default Form