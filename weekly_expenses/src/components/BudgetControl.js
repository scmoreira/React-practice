import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ReviewBudget } from '../helpers'

const BudgetControl = ({budget, rest}) => {
    return (
        <Fragment>
            <div className='alert alert-primary'>
               Budget: € {budget} 
            </div>
            <div className={ReviewBudget(budget, rest)}>
                Available: € {rest}
            </div>
        </Fragment>
    )
}
    
BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired
}

export default BudgetControl