import React from 'react';

const Form = props => (
  <div>
  <p>Enter a city and country to display weather</p>

  <form onSubmit={props.getWeather}>
    <div>
      <label>City:</label>
      <input
      type="text"
      name="city"
      onChange={props.handleChange}
      />
    </div>
    <div>
      <label>Country:</label>
      <input
      type="text"
      name="country"
      onChange={props.handleChange}
      />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
  </div>
)

export default Form;