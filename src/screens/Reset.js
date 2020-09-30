import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Reset extends Component {
    state = {
        token: this.props.match.params.token
      };

      render() {
          console.log('Valor do token: ', this.state.token)
          return(
          <h1>O Token é: {this.state.token}</h1>
          )
      }
}

export default withRouter(Reset);