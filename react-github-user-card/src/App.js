import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
  state = {
    user: [],
    userFollowers: []
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
    });
    axios.get('https://api.github.com/users/WilliamBerlin76/followers')
    .then(res => {
      console.log(res)
      this.setState({
        userFollowers: res.data
      })
    })
    .catch(err => {
      console.log('follower data not retrieved', err)
    })
  }

  render() {
      return (
      <div className="App">
        <h1>Github User Cards!</h1>
        <div className="profile-card">
          <img src={this.state.user.avatar_url} alt='Github pic'/>
          <h1>{this.state.user.name}</h1>
          <p>{this.state.user.login}</p>
        </div>
        <div className="follower-profile-card">
          <h2>Followers</h2>
          {this.state.userFollowers.map(item => {
            return(
              <>
                <img src={item.avatar_url} key={item.id} alt='follower pic'/>
                <h1 key={item.login}>{item.login}</h1>
              </>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
