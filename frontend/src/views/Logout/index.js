import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logout from './Logout';
import { logout } from '../../state/auth';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
