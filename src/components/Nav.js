import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold'
};

const Header = () => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink className="navbar-brand" to="/">Weather</NavLink>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            activeStyle={activeStyle}
            exact to="/"
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
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Header;
