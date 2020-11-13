import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import Error from './shared/Error'

const AskForBudget = ({setBudget, setRest, showDivBudget}) => {
 
    // States
    const [budgetQuantity, setBudgetQuantity] = useState(0)
    const [error, setError] = useState(false)

    // Submit Budget
    const handleSubmit = event => {
        event.preventDefault()

        // Validation
        if (budgetQuantity < 1 || isNaN(budgetQuantity)) {
            setError(true)
            return
        }

        // Submit
        setError(false)
        setBudget(budgetQuantity)
        setRest(budgetQuantity)
        showDivBudget(false)
    }

    return (

        <Fragment>
            <h2>Indicate your budget</h2>

            { error && <Error message='Wrong budget!' /> }

            <form className='submit' onSubmit={handleSubmit}>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Your budget here'
                    onChange={e => setBudgetQuantity(parseInt(e.target.value, 10))}
                    required
                />
                <input 
                    type='submit'
                    className='button u-full-width'
                    value='Confirm budget'
                />
            </form>
        </Fragment>

    )
}

AskForBudget.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRest: PropTypes.func.isRequired,
    showDivBudget: PropTypes.func.isRequired
}

export default AskForBudget