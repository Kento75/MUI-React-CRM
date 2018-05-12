import React, { Component } from 'react';

import Header from './common/Header/Header';

//import injectTapEventPlugin from 'react-tap-event-plugin';

//injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
