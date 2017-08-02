import React from 'react';
import { connect } from 'react-redux';
import loadingImg from './loading.gif';

const WeatherMessage = (props) => {
  const {
    isLoading,
    temp,
    cityName,
    error,
    extraMessage
  } = props.weather;

  if (isLoading) {
    return (
      <div style={msgStyle}>
        <img
          src={loadingImg}
          width="100px" height="100px"
          alt="Loading..."
        />
      </div>
    );
  }

  if (error) {
    return (
      <div style={msgStyle}>
        <p className="lead">
          {error}!
        </p>
      </div>
    );
  }

  if (temp && cityName) {
    console.log('extraMessage', extraMessage);
    if (!extraMessage) {
      return (
        <div style={msgStyle}>
          <p className="lead">
            It is { temp } in { cityName }.
          </p>
        </div>
      );
    } else {
      return (
        <div style={msgStyle}>
          <p className="lead">
            { extraMessage }! <br/>
            Our best guess: { temp } in { cityName }.
          </p>
        </div>
      );
    }

  }

  return null;
}


const msgStyle = {
  textAlign: 'center'
}

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(WeatherMessage);
