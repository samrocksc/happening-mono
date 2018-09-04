import React, { Component } from 'react';
import { CenteredBox } from '../../common/layouts';
import Button from '@material-ui/core/Button';

class Login extends Component {
  onLogin = () => this.props.login();
  render() {
    return (
      <CenteredBox>
        <Button onClick={this.onLogin} color="primary">
          Login
        </Button>
      </CenteredBox>
    );
  }
}

export default Login;
