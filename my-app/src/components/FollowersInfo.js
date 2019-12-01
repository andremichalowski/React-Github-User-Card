import React, { Component } from 'react';

import styled from 'styled-components';

const Card = styled.div `
    padding: 5%;
    margin: 5%;
    max-width: 400px;
    max-height: 800px;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column;
    justify-content: center;
    align-items: flex-start; */
    background-color: white;
    border: 1px solid #d1d5da;
    border-radius: 3px;
`

const Square= styled.div `
    padding: 5%;
    margin: 5%;
`

const Image = styled.img `
    max-width: 40px;
    max-height: 40px;
`
class FollowersInfo extends Component {
    render () {
        return (
            <Card>
                {/* <p> Followers Info: Placeholder for props information from followers </p> */}
                {/* <div>Iteration Statement</div> */}
                {this.props.followers.map((follower, index) => {
                    return <div key={index}>
                                <Square>
                                    {/* <div>{follower.login}</div> */}
                                    <a href={follower.html_url}>
                                        <Image src={follower.avatar_url} />
                                    </a>
                                </Square>
                            </div>
                })}
            </Card>
        )
    }
}

export default FollowersInfo;