import React from 'react'
import PropTypes from 'prop-types'

const Lyric = ({ lyric }) => <p className='lyric'>{lyric}</p>

// Documentation
Lyric.propTypes = {
    lyric: PropTypes.string.isRequired
}

 export default Lyric
