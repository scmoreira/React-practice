import React, { useState } from 'react'

import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import {getYearDifference, getIncrementByBrand, getPriceByCoverage} from '../helper'

// Styled Component
const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    margin-top: 2rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
`

const Form = ({ setSummary, setLoading }) => {

    // States
    const [data, setData] = useState({
        brand: '',
        year: '',
        coverage: ''
    })
    const [error, setError] = useState(false)

    // Destructuring
    const { brand, year, coverage } = data
    
    // Set values to the state
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // Submit form
    const handleSubmit = e => {
        e.preventDefault()

        if (brand.trim() === '' || year.trim() === '' || coverage.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        // Base price
        let price = 2000

        // Calculate discount by year ==> 3% for every year older
        const difference = getYearDifference(year)
        price -= ((difference * 3) * price) / 100

        // Calculate increment by brand ==> Asian: 5% American: 15% European: 30%
        price = getIncrementByBrand(brand) * price

        // Calculate increment by coverage ==> basic: 20%  full: 50%
        const increment = getPriceByCoverage(coverage)
        price = parseFloat(increment * price).toFixed(2)

        // Get total

        // Activate spinner
        setLoading(true)

        setTimeout(() => {
            // Deactivate spinner
            setLoading(false)

            // Update app state
            setSummary({
                quote: Number(price),
                data
            })

        }, 3000)
        

    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <Error>All field required</Error>}
            <Field>
                <Label>Car Brand</Label>
                <Select name='brand' value={brand} onChange={handleChange}>
                    <option value=''>-- Select --</option>
                    <option value='american'>American</option>
                    <option value='european'>European</option>
                    <option value='asian'>Asian</option>
                </Select>
            </Field>
            <Field>
                <Label>Car Year</Label>
                <Select name='year' value={year} onChange={handleChange}>
                <option value=''>-- Select --</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Coverage</Label>
                <InputRadio
                    type='radio'
                    name='coverage'
                    value='basic'
                    checked={coverage === 'basic'}
                    onChange={handleChange}
                /> Basic
                <InputRadio
                    type='radio'
                    name='coverage'
                    value='full'
                    checked={coverage === 'full'}
                    onChange={handleChange}
                /> Full
            </Field>
            <Button type='submit'>Get quote</Button>
        </form>
    )
}

// Documentation
Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form