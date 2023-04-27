import './styles/App.css'
import Input from './components/Input';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForecast from './components/WeatherForecast';
import { weatherApiUrl, weatherApiKey } from './api/api';
import { useState } from 'react';

function App() {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setForecast] = useState(null);

  const handleOnInputChange = async (inputData) => {
    try{
      const [latitude, longitude] = inputData.value.split(' ')

      const fetchWeather = await fetch(`${weatherApiUrl}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherApiKey}`)
      const fetchForecast = await fetch(`${weatherApiUrl}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherApiKey}`)

      const responseWeather = await fetchWeather.json();
      const responseForecast = await fetchForecast.json();

      setCurrentWeather({ city: inputData.label, ...responseWeather });
      setForecast({ city: inputData.label, ...responseForecast });
    } catch (error) {
      console.log(error);
    } finally {
      let bg = document.querySelector(".App");
      bg.style.height = "100%"
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <Input onInputChange={handleOnInputChange}/>
        {currentWeather ? <WeatherDisplay data={currentWeather}/> : <></>}
        { weatherForecast ? <WeatherForecast data={weatherForecast}/> : <></>}
      </div>
    </div>
  );
}

export default App;
