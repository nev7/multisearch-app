import React, { Component } from 'react';
import '../Styles/App.css';
import MultiSearch from './MultiSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Welcome to MultiSearch</div>
        </header>
        <p className="App-intro">
          Search results displayed are from DuckDuckGo and Bing
        </p>
        <MultiSearch/>
      </div>
    );
  }
}

export default App;
