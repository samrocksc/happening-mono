import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.isAuthenticated();
  }

  render() {
    const { authenticated  } = this.props
    return <div>test { authenticated }</div>;
  }
}

export default Home;
