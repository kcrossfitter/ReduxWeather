import { GET_WEATHER, LOAD_WEATHER, GET_ERROR } from '../actions/types';

const initialState = {
  isLoading: false,
  temp: '',
  cityName: '',
  error: '',
  extraMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WEATHER:
      return {
        ...state,
        isLoading: action.isLoading,
        error: '',
        extraMessage: '',
        temp: ''
      };

    case GET_WEATHER:
      return {
        ...state,
        temp: action.temp,
        cityName: action.cityName,
        error: action.error,
        extraMessage: action.extraMessage
      };

    case GET_ERROR:
      return {
        ...state,
        error: action.error,
        extraMessage: action.extraMessage
      };

    default:
      return state;
  }
}
