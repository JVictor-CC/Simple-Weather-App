import React from 'react'
import './style.css'

const WeatherDisplay = ({data}) => {

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <div className='weather-container'>
      <h1 className='title'>{data.city}</h1>
      <p className='date'>{today.toDateString()}</p>
      <div className='weather'>
        <div>
          <p className='temperature'>{Math.round(data.main.temp)}°C</p>
          <p className='description'>{data.weather[0].description}</p>
        </div>
        <img src={`images/${data.weather[0].icon}.png`} className='weather-icon' alt="weather icon" />
      </div>

      <div className='weather-info'>
        <div className='info-details'>
          <div className='params'>
            <span className='params-label'>Fells like</span>
            <span className='params-value'>{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className='params'>
            <span className='params-label'>Wind</span>
            <span className='params-value'>{data.wind.speed} m/s</span>
          </div>
          <div className='params'>
            <span className='params-label'>Humidity</span>
            <span className='params-value'>{data.main.humidity}%</span>
          </div>
          <div className='params'>
            <span className='params-label'>Clouds</span>
            <span className='params-value'>{data.clouds.all}%</span>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default WeatherDisplay