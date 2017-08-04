import { GET_WEATHER, LOAD_WEATHER, GET_ERROR } from './types';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=70cb6b62204135b83b5c087e5f747a5d&q=';

export const getWeather = (location) => {
  let encodedLocation = encodeURIComponent(location);
  let URL = `${BASE_URL}${encodedLocation}`;

  return (dispatch) => {
    fetch(URL)
      .then(response => response.json())
      .then(weather => {

        dispatch({
          type: LOAD_WEATHER,
          isLoading: false,
          error: '',
          extraMessage: '',
          temp: '',
          cityName: ''
        });

        if (weather.cod && weather.message) {

          dispatch({
            type: GET_ERROR,
            error: weather.message,
            extraMessage: ''
          });

        } else {
          if (location.toLowerCase() === weather.name.toLowerCase()) {
            dispatch({
              type: GET_WEATHER,
              temp: weather.main.temp,
              cityName: weather.name,
              error: '',
              extraMessage: ''
            });
          } else {
            dispatch({
              type: GET_WEATHER,
              temp: weather.main.temp,
              cityName: weather.name,
              error: '',
              extraMessage: `Requested: ${location}`
            });
          }

        }

      })
      .catch(error => {
        dispatch({
          type: GET_ERROR,
          error: 'Internal Server Error',
          extraMessage: ''
        });
      });
  }
};

export const loadWeather = () => {
  return {
    type: LOAD_WEATHER,
    isLoading: true,
    error: '',
    extraMessage: '',
    temp: '',
    cityName: ''
  };
};
