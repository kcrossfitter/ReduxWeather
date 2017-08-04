import React from 'react';
import { NavLink } from 'react-router-dom';

const Examples = () => (

  <div className="row">

    <div className="offset-3 col-6">
      <h2 style={headingStyle}>Examples</h2>
      <p className="lead">
        Here are a few example locations to try out:
      </p>
      <ol>
        <li>
          <NavLink
            exact to={{
              pathname: '/',
              search: '?location=Philadelphia'
            }}
            activeClassName="active"
            activeStyle={{fontWeight: 'bold'}}
          >
            Philadelphia
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to={{
              pathname: '/',
              search: '?location=Rio'
            }}
            activeClassName="active"
            activeStyle={{fontWeight: 'bold'}}
          >
            Rio, Brazil
          </NavLink>
        </li>
      </ol>
    </div>

  </div>
);

const headingStyle = {
  textAlign: 'center',
  marginTop: '2.5rem',
  marginBottom: '2.5rem',
  color: '#555'
};

export default Examples;
