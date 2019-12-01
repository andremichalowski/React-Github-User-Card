import React, { Component } from 'react';

import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = styled.div `
    padding: 1%;
    margin: 1%;
    max-width: 400px;
    max-height: 800px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #6cc644;
    border: 7px solid green;
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
                <CardHeader />
                <CardBody />
            </Card>
        )
    }
}

export default UserCard;