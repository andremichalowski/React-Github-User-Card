import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';
import FollowersInfo from './components/FollowersInfo';
class App extends Component {
  constructor() {
    super()

    this.state = {
      username: 'andremichalowski',
      githubUser: {},
      followers: [],
      inputValue: ''
    }
  }

  getUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => {
        console.log('Axios get for githubUser', response);
        this.setState({
          githubUser: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((response) => {
        console.log('Axios get for followers', response);
        this.setState({
          followers: response.data
        })
      })
  }

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.username !== this.state.username) {
      this.getUser();
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <h1>React Github User Card</h1>
        <div>Test {this.props.name}</div>
        <UserCard />
        <FollowersInfo />
      </div>
    )
  }
}

export default App;
