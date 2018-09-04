import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Callback extends Component {
  static propTypes = {
    handleAuthentication: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired,
  };
  componentDidMount() {
    const { handleAuthentication } = this.props;
    handleAuthentication();
  }
  render() {
    const { loaded } = this.props;
    if (!loaded) {
      return <div>...loading</div>;
    }
    return <Redirect to="/home" />;
  }
}

export default Callback;
