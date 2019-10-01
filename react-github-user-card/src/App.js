import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
  state = {
    user: []
  };
  componentDidMount(){
    axios.get('https://api.github.com/users/WilliamBerlin76')
    .then(res => {
      console.log(res)
      this.setState({
        user: res.data
     });
    })
    .catch(err => {
      console.log('data not retrieved', err)
    })
  }

  render() {
      return (
      <div className="App">
        <h1>Github User Cards!</h1>
        <div>
          <img src={this.state.user.avatar_url} alt='profile picture'/>
          <h1>{this.state.user.name}</h1>
          <p>{this.state.user.login}</p>
        </div>
      </div>
    );
  }
}

export default App;
