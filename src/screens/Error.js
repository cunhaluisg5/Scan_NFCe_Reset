import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Error extends Component {

    render() {
        return (
            <h1>Página de erro!!!</h1>
        )
    }
}

export default withRouter(Error);