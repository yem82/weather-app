import React, { Component } from 'react';
import Form from './Form.js';
import axios from 'axios';

class Result extends Component {
  state = {
    weatherDescription: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  getResults = async (e) =>  {
    e.preventDefault();

    const { city, country } = this.state;
    const formData = await axios.get(`/weather/${city}/${country}`)
    console.log(formData.data.data)
    const cityWeather = formData.data.data.weather
    const weatherDescription = cityWeather.map(weather => weather.description)
    this.setState({weatherDescription})
  }

  render() {
    const {city, country, weatherDescription} = this.state
    return(
      <div>
        <p>Enter a city and country to display weather</p>
        <Form getResults={this.getResults} handleChange={this.handleChange} />
        <p>Results:</p>
        <ul>
        <li>City: {city}</li>
        <li>Country: {country}</li>
        <li>Weather Description: {weatherDescription}</li>
        </ul>
      </div>
    )
  }
}

export default Result;