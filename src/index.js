import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

const jQuery = require('jquery');
const Tether = require('tether');
window.jQuery = jQuery;
window.Tether = Tether;

require('bootstrap');

const createStoreWithMiddleware =
      applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const containerStyle = {
  marginTop: '1rem'
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <div className="container" style={containerStyle}>
          <Switch>
            <Route exact path="/" component={Weather} />
            <Route path="/about" component={About} />
            <Route path="/examples" component={Examples} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
