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
class FollowersInfo extends Component {
    render () {
        return (
            <Card>
                {/* <p> Followers Info: Placeholder for props information from followers </p> */}
                <div>Iteration Statement</div>
                    {/* <div>Name: {this.props.followers.name}</div>
                    <a href={`https://github.com/${this.props.followers.login}`}>
                        <img src={this.props.followers.img}/>
                    </a> */}
            </Card>
        )
    }
}

export default FollowersInfo;