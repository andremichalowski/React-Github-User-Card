import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import './App.css';

import UserCard from './components/UserCard';
import FollowersInfo from './components/FollowersInfo';

const AppContainer = styled.div`
  font-size: 1rem;
  max-width: 80%;
  max-width: 450px;
  min-width: 450px;
  padding: 5% 15%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items : center; */
  align-content: stretch;
  background-color: #6cc644;
  border: 30px solid green;
  border-radius: 60px;
  white-space: nowrap;
`
const Title = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items : center; */
  align-content: center;
`

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
      <AppContainer>
        <Title>
          <h1>REACT GITHUB USER USER CARD  </h1>
        </Title>
        {/* <div>Test {this.props.name}</div> */}
        <UserCard />
        <FollowersInfo />
      </AppContainer>
    )
  }
}

export default App;
