import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const Weather = () => (
  <div>
    <h2 style={title}>
      Get Weather
    </h2>
    <WeatherForm />
    <WeatherMessage />
  </div>
);


const title = {
  textAlign: 'center',
  marginBottom: '2rem'
};

export default Weather;
