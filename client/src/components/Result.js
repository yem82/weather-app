import React, { Component } from 'react';
import Form from './Form.js';
import Weather from './Weather';
import axios from 'axios';

class Result extends Component {
  state = {
    weatherDescription: null,
    temperature: null,
    humidity: null,
    wind: null,
    error: null,
  }

  getWeather = async (e) =>  {
    e.preventDefault();
    try {
    const city = e.target.city.value, country = e.target.country.value
    const formData = await axios.get(`/weather/${city}/${country}`)
    const weatherData = formData.data.data; console.log(weatherData)

    if(city && country){
    this.setState({city: weatherData.name,
      country: weatherData.sys.country,
      weatherDescription: weatherData.weather[0].description,
      temperature: Math.round(weatherData.main.temp),
      humidity: weatherData.main.humidity,
      wind: weatherData.wind.speed
    })}}

    catch(err) {
      console.log(err)
      this.setState({error: 'Error: invalid city or country provided'})
    }
  }

  render() {
    const {city, country, weatherDescription,
      temperature, humidity, wind, error} = this.state
    return(
      <div>
        <Form getWeather={this.getWeather} />
        <p>Results:</p>
        <Weather
          city={city}
          country={country}
          weatherDescription={weatherDescription}
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