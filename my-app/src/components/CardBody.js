import React, { Component } from 'react';

import styled from 'styled-components';

const Card = styled.div `
    padding: 1%;
    margin: 1%;
    max-width: 400px;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #6cc644;
    border: 7px solid green;
`
class CardBody extends Component {
    render () {
        return (
            <Card>
                {/* <p>Card Body: Placeholder for props information from user and followers array </p> */}
                <a href={`https://github.com/${this.props.github}`}>Github</a>
                <div>Email: {this.props.email}</div>
                {/* //statement for empty */}
                <div>Followers: {this.props.followers}</div>
                <div>Following: {this.props.following}</div>
                <div>Other: {this.props.other}</div>
                {/* //statement for empty? */}
            </Card>
        )
    }
}

export default CardBody;