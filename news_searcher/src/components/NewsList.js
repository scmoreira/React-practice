import React from 'react'
import PropTypes from 'prop-types'

import New from './New'

const NewsList = ({ news }) => ( 
    
        <div className="row">
            {news.map(info => (
                <New 
                    key={info.url}
                    info={info}
                />
            ))}
        </div>
)

// Documentation
NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default NewsList