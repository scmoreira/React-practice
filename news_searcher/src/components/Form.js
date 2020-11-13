import React from 'react'  
import PropTypes from 'prop-types'

import useSelect from '../hooks/useSelect'

import styles from './Form.module.css'

const Form = ({setCategory}) => {

    const Options = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Business'},
        { value: 'entertainment', label: 'Entertainment'},
        { value: 'health', label: 'Health'},
        { value: 'science', label: 'Science'},
        { value: 'sports', label: 'Sports'},
        { value: 'technology', label: 'Technology'}
    ]

    // Use custom hook
    const [ category, NewsSelect ] = useSelect('general', Options)

    // Submit form
    const handleSubmit = e => {
        e.preventDefault()

        setCategory(category)
    }

    return ( 
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.heading}>Search News by category</h2>

                    <NewsSelect />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles['btn-block']}  btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
     )
}

// Documentation
Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}
 
export default Form