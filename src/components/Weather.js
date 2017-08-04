import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadWeather, getWeather } from '../actions'
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

class Weather extends React.Component {
  componentDidMount() {
    let search = this.props.location.search;
    
    if (search && search.length > 0) {
      let city = this.props.location.search.split('=')[1];
      this.props.loadWeather();
      this.props.getWeather(city);
    }
  }

  componentWillReceiveProps(newProps) {
    let search = newProps.location.search;
    
    if (search && search.length > 0) {
      let city = newProps.location.search.split('=')[1];
      this.props.loadWeather();
      this.props.getWeather(city);
    }
  }

  render() {
    return (
      <div>
        <h2 style={headingStyle}>
          Get Weather
        </h2>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
};

const headingStyle = {
  textAlign: 'center',
  marginTop: '2.5rem',
  marginBottom: '2.5rem',
  color: '#555'
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loadWeather, getWeather
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Weather);
