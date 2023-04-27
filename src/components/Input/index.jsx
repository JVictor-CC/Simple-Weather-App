import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoApiOptions, geoApiUrl } from '../../api/api'
import './style.css'

const Input = ({onInputChange}) => {
    
    const [input, setInput] = useState(null)
    
    const handleOnChange = (inputData) => {
        setInput(inputData)
        onInputChange(inputData)
    }

    const loadOptions = async (inputData) => {
        try {
            const response = await fetch(`${geoApiUrl}?minPopulation=1000000&namePrefix=${inputData}`, geoApiOptions)
            const result = await response.json();
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    }  
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='input-container'>
            <AsyncPaginate
            placeholder="Search by Cities"
            debounceTimeout={600}
            value={input}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            />
        </div>
        
  )
}

export default Input