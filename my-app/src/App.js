import React, { Component } from "react";
import axios from "axios";

import UserCard from "./components/UserCard";
import FollowersInfo from "./components/FollowersInfo";

import "./App.css";
import styled from "styled-components";

const AppContainer = styled.div`
  font-size: 1rem;
  max-width: 80%;
  max-width: 450px;
  min-width: 450px;
  padding: 5% 15%;
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
  background-color: white;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  white-space: nowrap;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "andremichalowski",
      gitUser: {},
      followers: [],
      inputValue: ""
    };
  }

  getUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(response => {
        console.log("Axios get for gitUser", response);
        this.setState({
          gitUser: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(response => {
        console.log("Axios get for followers", response);
        this.setState({
          followers: response.data
        });
      });
  };

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.getUser();
    } else {
      return;
    }
  }

  loginChange = username => {
    this.setState({ username });
  };

  render() {
    return (
      <AppContainer>
        <Title>
          <h1>REACT GITHUB USER CARD </h1>
        </Title>
        <UserCard {...this.state.gitUser} />
        <FollowersInfo
          followers={this.state.followers}
          loginChange={this.loginChange}
        />
      </AppContainer>
    );
  }
}

export default App;
