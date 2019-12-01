import React, { Component } from 'react';
import './App.css';

import UserCard from './components/UserCard';
import FollowersInfo from './components/FollowersInfo';
class App extends Component {
  render() {
    return (
      <>
        <UserCard />
        <FollowersInfo />
      </>
    )
  }
}

export default App;
