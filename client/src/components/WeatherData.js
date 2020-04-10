import React, { Component } from 'react';
import Form from './Form';
import './stylesheets/WeatherData.scss';
import Weather from './Weather';
import axios from 'axios';

class Result extends Component {
  state = {
    weatherDescription: null,
    icon: null,
    temperature: null,
    humidity: null,
    wind: null,
    error: null,
  }

  getWeather = async (e) => {
    e.preventDefault();
    try {
    const city = e.target.city.value, country = e.target.country.value
    const formData = await axios.get(`/weather/${city}/${country}`)
    const weatherInfo = formData.data.weatherData; console.log(formData.data.weatherData)
    const imageUrl = `http://openweathermap.org/img/wn/${weatherInfo.weatherIcon}@2x.png`
      if(city && country) {
        this.setState({city: weatherInfo.city,
        country: weatherInfo.country,
        weatherDescription: weatherInfo.description,
        icon: <img height="180px" src={imageUrl} alt="weathericon"></img>,
        temperature: weatherInfo.temperature,
        humidity: weatherInfo.humidity,
        wind: weatherInfo.windSpeed,
        error: null
        })
      }
    } catch(err) {
      console.log(err)
      this.setState({city: null,
        country: null,
        weatherDescription: null,
        icon: null,
        temperature: null,
        humidity: null,
        wind: null,
        error: 'Please recheck the city or country provided'
      })
     }
  }

  render() {
    const {city, country, weatherDescription, icon,
      temperature, humidity, wind, error} = this.state
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <Weather
          city={city}
          country={country}
          weatherDescription={weatherDescription}
          icon={icon}
          temperature={temperature}
          humidity={humidity}
          wind={wind}
          error={error}
        />
      </div>
    )
  }
}

export default Result;