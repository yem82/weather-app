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
      />
    </div>
    <div>
      <label>Country:</label>
      <input
      type="text"
      name="country"
      />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
  </div>
)

export default Form;