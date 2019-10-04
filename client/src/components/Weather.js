import React from 'react';

const Weather = props => (
  <div>
   {
     props.city && props.country && <p>
     <span>{props.city}, {props.country}</span>
   </p>
  }
  {
    props.weatherDescription && <p>
      <span>{props.weatherDescription}</span>
    </p>
  }
  {
    props.temperature && <p>
      <span>{props.temperature}°C</span>
    </p>
  }
  {
    props.humidity && <p> Humidity:
      <span>{props.humidity}%</span>
    </p>
  }
  {
    props.wind && <p> Wind:
      <span>{props.wind} mph</span>
    </p>
  }
  </div>
)

export default Weather;