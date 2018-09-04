import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Callback from './Callback';
import { handleAuthentication } from '../../state/auth';

const mapStateToProps = state => {
  return {
    loaded: state.auth.handleAuthentication,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ handleAuthentication }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
