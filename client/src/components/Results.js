import React, { Component } from 'react';
import axios from 'axios';

class Results extends Component {
  state = {
    weather: ''
  }

  componentDidMount() {
  axios.get('/weather').then((res) => 
  console.log(res.data))
  }

  render() {
    return(
      <div>
        <p>Results:</p>
      </div>
    )
  }
}

export default Results;