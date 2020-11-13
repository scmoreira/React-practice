import React from 'react'
import PropTypes from 'prop-types'

const Expense = ({expense}) => {
    return (
        <li className='expenses'>
            <p>{expense.expenseName}<span className='expense'>€ {expense.expenseQuantity}</span></p>
        </li>
    )
}

Expense.propTypes = {
    expense: PropTypes.object.isRequired
}

export default Expense