import React, { Component } from 'react';
import Header from './common/Header/Header';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>Hello World</div>
      </div>
    );
  }
}

export default HelloWorld;
