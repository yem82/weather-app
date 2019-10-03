import React from 'react';

const Form = props => (
<form onSubmit={props.getResults}>
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
)

export default Form;