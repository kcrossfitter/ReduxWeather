import React from 'react';

const About = () => (
  <div className="row">
    <div className="offset-3 col-6">
      <h2 style={headingStyle}>
        About
      </h2>
      <p className="lead">
        A weather application build on React, Redux, RR4
      </p>
      <p className="lead">
        Tools used:
      </p>
      <ul>
        <li>
          <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> - React Build Tool
        </li>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript UI Framework
        </li>
        <li>
          <a href="http://redux.js.org/">Redux</a> - Predictable state container for JavaScript
        </li>
        <li>
          <a href="https://reacttraining.com/react-router/">React Router Version 4</a> - Declarative routing for React
        </li>
        <li>
          <a href="http://openweathermap.org/">OpenWeatherMap</a> - Current Weather in Your City
        </li>
      </ul>
    </div>
  </div>
);

const headingStyle = {
  textAlign: 'center'
};

export default About;
