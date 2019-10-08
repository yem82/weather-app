import React from 'react';
import './stylesheets/Weather.scss';

const Weather = props => (
  <div className="weather">
  {
    props.error && <p>
      <span className="error">{props.error}</span>
    </p>
  }
  {
    props.icon && <p className="icon">
      <span>{props.icon}</span>
    </p>
  }
  {
     props.city && props.country && <p className="location">
     <span>{props.city}, {props.country}</span>
   </p>
  }
  {
    props.weatherDescription && <p className="description">
      <span>{props.weatherDescription}</span>
    </p>
  }
  {

    props.temperature && <p className="temperature">
      <span>{props.temperature}°C</span>
    </p>

  }
  {
    props.humidity && <p className="key-1"> humidity:
      <span className="humidity">{props.humidity}%</span>
    </p>
  }
  {
    props.wind && <p className="key-2"> wind:
      <span className="wind">{props.wind} mph</span>
    </p>
  }
  </div>
)

export default Weather;