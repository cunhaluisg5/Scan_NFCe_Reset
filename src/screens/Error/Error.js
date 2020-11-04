import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Container, Header, Body } from './Style';

class Error extends Component {

    render() {
        return (
            <Container>
                <Header><p>Scan NFCe</p></Header>
                <Body>
                    <h1>Ops... Algo deu errado!</h1>
                </Body>
            </Container>
        )
    }
}

export default withRouter(Error);