import React, { Component } from 'react';

import styled from 'styled-components';

const Card = styled.div `
    padding: 5%;
    margin: 5%;
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
const TextTop = styled.div `
padding: 3% 0%;
margin-top: 5%;
`
const Text = styled.div `
padding: 3% 0%;
`
const UserImg = styled.img `
    max-width: 270px;
`

class CardHeader extends Component {
    render () {
        return (
            <Card>
                {/* <p>CardHeader: Placeholder for props information from user and followers array </p> */}
                <UserImg src={this.props.image} alt='User Card' />
                <TextTop>
                    <div>Name: {this.props.name}</div>
                </TextTop>
                <Text>
                    <div>User-Name: {this.props.login}</div>
                </Text>
                {/* // props outside need to be same as the inside... */}
                {/* <div>Image: {this.props.image}</div> */}
            </Card>
        )
    }
}

export default CardHeader;


// class CardHeader extends Component {
//     render (props) {
//         return (
//                 {/* <p>CardHeader: Placeholder for props information from user and followers array </p> */}
//                 <Card>
//                     {this.props.gitUser.map((user, index) => {
//                     return <div key={index}>
//                                 {/* <Card> */}
//                                     <UserImg src={user.image} alt='User Card' />
//                                     <div>Name: {user.name}</div>
//                                     <div>User-Name: {user.login}</div>
//                                     <div>Image: {user.image}</div>
//                                 {/* </Card> */}
//                             </div>
//                 })}
//                 </Card>
//         )
//     }
// }

// export default CardHeader;