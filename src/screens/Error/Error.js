import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Logo from '../../images/logo.png';
import { Container, Body, Content } from './Style';

class Error extends Component {

    render() {
        return (
            <Container>
                <Body>
                    <Content>
                    <img src={Logo} alt="Logo" />
                    <h1>Página não encontrada!</h1>
                    </Content>
                </Body>
            </Container>
        )
    }
}

export default withRouter(Error);