import React from 'react'
import'./style.css'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WeatherForecast = ({data}) => {

    const today = new Date().getDay();
    const weekDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, today));

  return (
    <div className='forecast-container'>
        <h1 className='forecast-title'>Next 7 days</h1>
        <Accordion allowZeroExpanded>
            {data.list.slice(0,7).map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='next-days'>
                                <div className='days'>
                                    <img src={`images/${item.weather[0].icon}.png`} className='icon' alt="weather icon" />
                                    <p>{weekDays[index]}</p>
                                </div>
                                
                                <p>{item.weather[0].description}</p>
                                <p>{`Min: ${Math.round(item.main.temp_min)}°C  - Max: ${Math.round(item.main.temp_max)}°C `}</p>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='next-days-details'>
                            <div className='details-item'>
                                <span className='item-title'>Humidity: </span>
                                <span className='item-value'>{item.main.humidity}%</span>
                            </div>
                            <div className='details-item'>
                                <span className='item-title'>Feels like: </span>
                                <span className='item-value'>{item.main.feels_like}°C</span>
                            </div>
                            <div className='details-item'>
                                <span className='item-title'>Wind speed: </span>
                                <span className='item-value'>{item.wind.speed}m/s</span>
                            </div>
                            <div className='details-item'>
                                <span className='item-title'>Clouds: </span>
                                <span className='item-value'>{item.clouds.all}%</span>
                            </div>
                            <div className='details-item'>
                                <span className='item-title'>Sea level: </span>
                                <span className='item-value'>{item.main.sea_level}m</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
            
        </Accordion>
    </div>
  )
}

export default WeatherForecast