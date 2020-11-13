import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({ unit, weatherData }) => {

    // Destructuring
    const { name, main, weather } = weatherData

    const tempUnit = unit => {
        if (unit === 'metric') {
            return '°C'
        } else if (unit === 'imperial') {
            return '°F'
        } else {
            return 'K'
        }
    }

    if (!name) return null
    
    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>The weather in {name}</h2>
                <p className='temperature'>{(main.temp).toFixed(0)} {tempUnit(unit)}</p>
                <p>{weather[0].description}</p>
                <p>Humidity: {main.humidity} %</p>
                <p>Temp-Max: {(main.temp_max.toFixed(0))} {tempUnit(unit)} || Temp-Min: {(main.temp_min).toFixed(0)} {tempUnit(unit)}</p>
            </div>
        </div>
    )
}

// Documentation
Weather.propTypes = {
    unit: PropTypes.string.isRequired,
    weatherData: PropTypes.object.isRequired
}

export default Weather
