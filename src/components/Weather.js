import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const Weather = () => (
  <div>
    <h3 style={title}>
      Get Weather
    </h3>
    <WeatherForm />
    <WeatherMessage />
  </div>
);

// class Weather extends Component {
//   render() {
//     return (
//       <div>
//         <h3 style={title}>
//           Get Weather
//         </h3>
//         <WeatherForm />
//         <WeatherMessage />
//       </div>
//     );
//   }
// }

const title = {
  textAlign: 'center',
  marginBottom: '2rem'
};

export default Weather;
