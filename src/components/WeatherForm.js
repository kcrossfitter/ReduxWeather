import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadWeather, getWeather } from '../actions'

class WeatherForm extends Component {

  handleSubmit(e) {
    e.preventDefault();

    const location = this.location.value;
    this.location.value = '';

    if (location.length > 0) {
      this.props.loadWeather();
      this.props.getWeather(location);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        <div className="row">
          <div className="form-group offset-4 col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Enter city name"
              ref={(location) => this.location = location}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group offset-4 col-4">
            <button
              type="submit"
              className="btn btn-outline-info btn-block"
            >
              Get Weather
            </button>
          </div>
        </div>

      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadWeather, getWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(WeatherForm);
