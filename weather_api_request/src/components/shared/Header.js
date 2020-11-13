import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <nav>
            <div className='nav-wrapper  blue darken-3'>
                <a href='#!' className='brand-logo'>{title}</a>
            </div>
       </nav> 
    )
}

// Documentation
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header