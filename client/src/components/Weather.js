import React from 'react';

const Weather = props => (
  <div className="weather">
  {
    props.error && <p>
      <span className="error">{props.error}</span>
    </p>
  }
  {
     props.city && props.country && <p>
     <span className="location">{props.city}, {props.country}</span>
   </p>
  }
  {
    props.weatherDescription && <p>
      <span className="description">{props.weatherDescription}</span>
    </p>
  }
  {
    props.temperature && <p>
      <span className="temperature">{props.temperature}°C</span>
    </p>
  }
  {
    props.humidity && <p className="key"> Humidity:
      <span className="humidity">{props.humidity}%</span>
    </p>
  }
  {
    props.wind && <p className="key"> Wind:
      <span className="wind">{props.wind} mph</span>
    </p>
  }
  </div>
)

export default Weather;