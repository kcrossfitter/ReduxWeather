import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadWeather, getWeather } from '../actions';

const activeStyle = {
  fontWeight: 'bold'
};

class Nav extends React.Component {
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
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Weather</Link>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                activeStyle={activeStyle}
                exact
                to="/"
              >
                Get Weather
              </NavLink>
              {/* <a className="nav-link" href="#">Get Weather <span className="sr-only">(current)</span></a> */}
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                activeStyle={activeStyle}
                to="/about"
              >
                About
              </NavLink>
              {/* <a className="nav-link" href="#">About</a> */}
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                activeStyle={activeStyle}
                to="/examples"
              >
                Examples
              </NavLink>
              {/* <a className="nav-link" href="#">Examples</a> */}
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search weather by city"
              ref={(location) => this.location = location}
            />
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="submit"
            >
              Get Weather
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadWeather, getWeather }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(Nav));
