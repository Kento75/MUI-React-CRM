import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import store from '../store';
import { Top, Hello } from '../components';
//import { Home, About } from '../containers';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Top} />
            <Route path="/hello" component={Hello} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(Root);
