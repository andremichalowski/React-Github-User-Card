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
    /* background-color: white;
    border: 1px solid #d1d5da;
    border-radius: 3px; */
`

class CardHeader extends Component {
    render () {
        return (
            <Card>
                {/* <p>CardHeader: Placeholder for props information from user and followers array </p> */}
                <div>Name: {this.props.name}</div>
                <div>User-Name: {this.props.login}</div>
                <div>Image: {this.props.image}</div>
            </Card>
        )
    }
}

export default CardHeader;