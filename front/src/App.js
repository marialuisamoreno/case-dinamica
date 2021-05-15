import React, { Component } from 'react';
import Routes from './components/routes';
import './App.css';
import './assets/icofont/icofont.css';
import './assets/custom/bootstrap.css';
import './components/shared/table/table.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
