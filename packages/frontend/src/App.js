import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UniversalContainer, UniversalText } from 'happening-components';

// import NavBar from './common/NavBar';
// Example Layout:
// <Layout>
//   <NavBar />
// </Layout>

class App extends Component {
  render() {
    return (
      <UniversalContainer>
        <UniversalText>Testing</UniversalText>
      </UniversalContainer>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    test: true,
  };
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
