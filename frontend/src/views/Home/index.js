import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import { isAuthenticated } from '../../state/auth';

export const mapStateToProps = state => {
  return {
    authenticated: state.auth.isAuthenticated,
  };
};

export const mapDispatchToProps = dispatch => bindActionCreators({ isAuthenticated }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
