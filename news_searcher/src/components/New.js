import React from 'react'
import PropTypes from 'prop-types'

import styles from './New.module.css'

const New = ({ info }) => {

    // Destructuring
    const { urlToImage, url, title, description, source } = info

    return ( 
        <div className='col s12 m6 l4'>
            <div className={`${styles.card} card`}>
                {urlToImage && 
                    <div className='card-image'>
                        <img src={urlToImage} alt={title} />
                        <span className='card-title'>{source.name}</span>
                    </div>
                }

                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className='card-action'>
                    <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='waves-effect waves-light btn'
                    >See</a>
                </div>
            </div>
        </div>
     )
}

// Documentation
New.propTypes = {
    info: PropTypes.object.isRequired
}
 
export default New