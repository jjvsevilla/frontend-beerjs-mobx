import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';

import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <Header title="FrontEnd!" subtitle="BeerJS vol.2" />
        <Main />
      </div>
    );
  }
}

export default App;
