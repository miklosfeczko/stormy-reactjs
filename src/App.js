import React, {useState} from 'react'
import Form from './components/Form'
import Weather from './components/Weather'
import Forecast from './components/Forecast'
import {APIKEY} from './components/ignoreThis'
import './App.css'

const API_KEY = APIKEY

function App() {
  const [weather, setWeather] = useState([])
  const [forecast, setForecast] = useState([])

  async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
    const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
    const data = await apiData.json()
    const data2 = await forecastData.json()
    
    if (data.cod === 401) {
      setWeather({
        error: 'Something went wrong'
      })
    } else if (city && data.cod !== '404') {
      setWeather({
        id: data.id,
        data: data,
        city: data.name,
        temperature: data.main.temp,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        wind: data.wind.speed,
        error: ''
    })
      setForecast({
        data2: data2
      })
    } else {
        setWeather({
          id: '',
          data: '',
          city: '',
          temperature: '',
          country: '',
          description: '',
          icon: '',
          wind: '',
          error: 'Invalid city'
        })
        setForecast({
          data2: ''
        })
    }
  }

  return (
    <React.Fragment>
        <h3>Stormy</h3>
        <Form getWeather={fetchData} />
        <Weather
          city={weather.city}
          icon={weather.icon}
          country={weather.country}
          description={weather.description}
          temperature={weather.temperature}
          wind={weather.wind}
          error={weather.error}
        />
        <div className="sidebar">
          <Forecast data={forecast.data2} />
        </div>
    </React.Fragment>
  );
}

export default App
