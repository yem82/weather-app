import React, { Component } from 'react';
import Form from './Form.js';
import Weather from './Weather';
import axios from 'axios';

class Result extends Component {
  state = {
    temperature: null,
    humidity: null,
    wind: null,
    weatherDescription: null
  }

  getWeather = async (e) =>  {
    e.preventDefault();

    const city = e.target.city.value, country = e.target.country.value
    const formData = await axios.get(`/weather/${city}/${country}`)
    const weatherData = await formData.data.data; console.log(weatherData)

    this.setState({city: weatherData.name,
      country: weatherData.sys.country,
      weatherDescription: weatherData.weather[0].description,
      temperature: Math.round(weatherData.main.temp),
      humidity: weatherData.main.humidity,
      wind: weatherData.wind.speed
    })
  }

  render() {
    const {city, country, temperature, humidity, wind, weatherDescription} = this.state
    return(
      <div>
        <Form getWeather={this.getWeather} />
        <p>Results:</p>
        <Weather
          city={city}
          country={country}
          humidity={humidity}
          temperature={temperature}
          wind={wind}
          weatherDescription={weatherDescription}
        />
      </div>
    )
  }
}

export default Result;