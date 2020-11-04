import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Api from '../../service/Api';
import { Form, Container, Header, Body } from './Style';

class Reset extends Component {
    state = {
        token: this.props.match.params.token,
        email: "",
        password: "",
        error: "",
        sucess: ""
    };

    resetPassword = async e => {
        e.preventDefault();
        this.setState({
            error: "",
            success: ""
        });
        const { token, email, password } = this.state;

        if (!token || !email || !password) {
            this.setState({ error: "Preencha todos os dados para redefinir a sua senha" });
        } else {
            await Api.post('/auth/reset_password', {
                token: token,
                email: email,
                password: password
            })
                .then(() => {
                    this.setState({ success: 'Redefinição de senha efetuada com sucesso' });
                })
                .catch(err => {
                    this.setState({ error: err.response.data.error });
                })
        }
    };

    render() {
        return (
            <Container>
                <Header><p>Scan NFCe</p></Header>
                <Body>
                    <Form onSubmit={this.resetPassword}>
                        {this.state.error && <p id="error">{this.state.error}</p>}
                        {this.state.success && <p id="success">{this.state.success}</p>}
                        <h1>Redefinição de Senha</h1>
                        <input
                            type="email"
                            placeholder="E-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <button type="submit">Redefinir Senha</button>
                    </Form>
                </Body>
            </Container>
        );
    }
}

export default withRouter(Reset);