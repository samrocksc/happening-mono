import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './Login';
import { login } from '../../state/auth';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
