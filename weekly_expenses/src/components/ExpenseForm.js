import React, { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import Error from './shared/Error'

const ExpenseForm = ({setExpense, setUpdatedExpense}) => {

    // States
    const [expenseName, setExpenseName] = useState('')
    const [expenseQuantity, setExpenseQuantity] = useState(0)
    const [error, setError] = useState(false)

    // Submit expense
    const handleSubmit = event => {
        event.preventDefault()

        // Validation
        if (expenseQuantity < 1 || isNaN(expenseQuantity)) {
            setError(true)
            return
        }
        setError(false)

        // Expense (generate id with shortid)
        const expense = {
            expenseName,
            expenseQuantity,
            id: shortid.generate()
        }
        
        // Submit
        setExpense(expense)
        setUpdatedExpense(true)

        // Reset form
        setExpenseName('')
        setExpenseQuantity(0)
    }

    return (
        <form className='submit' onSubmit={handleSubmit}>
            <h2>Your expenses</h2>

            { error && <Error message='Wrong expense quantity!' /> }

            <div className='field'>
                <label>Expense Name</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Ex. Food'
                    value={expenseName}
                    onChange={e => setExpenseName(e.target.value)}
                    required
                />
            </div>
            <label>Quantity</label>
            <input 
                type='number'
                className='u-full-width'
                placeholder='Ex. 300'
                value={expenseQuantity}
                onChange={e => setExpenseQuantity(parseInt(e.target.value, 10))}
                required
            />
            <input 
                type='submit'
                className='button u-full-width'
                value='Add'
            />
        </form>
    )
}

ExpenseForm.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setUpdatedExpense: PropTypes.func.isRequired
}

export default ExpenseForm