import React, { Component } from 'react';

import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = styled.div `
    padding: 5%;
    margin: 5%;
    max-width: 400px;
    max-height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border: 1px solid #d1d5da;
    border-radius: 3px;
`

// font-size: 1rem;
//   max-width: 80%;
//   padding: 5% 15%;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items : center; */
//   align-content: stretch;

//   border-radius: 60px;
//   white-space: nowrap;


class UserCard extends Component {
    render () {
        return (
            <Card>
                <CardHeader name={this.props.name} image={this.props.avatar_url} login={this.props.login} />
                <CardBody 
                    html_url={this.props.html_url} 
                    email={this.props.email} 
                    followers={this.props.followers}
                    following={this.props.following}
                    public_repos={this.props.public_repos} />
            </Card>
        )
    }
}

export default UserCard;