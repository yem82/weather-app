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
    const weatherData = formData.data.data; console.log(weatherData)
    const imageUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
      if(city && country) {
        this.setState({city: weatherData.name,
        country: weatherData.sys.country,
        weatherDescription: weatherData.weather[0].main,
        icon: <img height="180px" src={imageUrl} alt="weathericon"></img>,
        temperature: Math.round(weatherData.main.temp),
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed,
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