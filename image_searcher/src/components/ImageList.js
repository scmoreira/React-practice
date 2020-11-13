import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'

const ImageList = ({images}) => {
    return ( 
        <div className="col-12 p-5 row">
            {images.map(image => (
                <Image 
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    )
}

// Documentation
ImageList.propTypes = {
    images: PropTypes.array.isRequired
}
 
export default ImageList