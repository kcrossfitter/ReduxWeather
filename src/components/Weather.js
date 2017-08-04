import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const Weather = () => (
  <div>
    <h2 style={headingStyle}>
      Get Weather
    </h2>
    <WeatherForm />
    <WeatherMessage />
  </div>
);


const headingStyle = {
  textAlign: 'center',
  marginTop: '2.5rem',
  marginBottom: '2.5rem'
};

export default Weather;
