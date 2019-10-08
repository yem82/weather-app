import React from 'react';
import './stylesheets/Form.scss'

const Form = props => (
  <div>
  <p className="prompt">Enter a city and country to display weather</p>

  <form onSubmit={props.getWeather}>
    <div>
      <label className="city-label">City:</label>
      <input
      type="text"
      name="city"
      />
    </div>
    <div>
      <label className="country-label">Country:</label>
      <input
      type="text"
      name="country"
      />
    </div>
      <button type="submit">Submit</button>
  </form>
  </div>
)

export default Form;