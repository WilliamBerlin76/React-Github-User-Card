import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      id: null
    }
  }
  render() {
      return (
      <div className="App">
        <h1>Github User Cards!</h1>
      </div>
    );
  }
}

export default App;
