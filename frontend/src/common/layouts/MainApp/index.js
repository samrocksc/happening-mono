import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withWidth from '@material-ui/core/withWidth';

import BottomNav from './BottomNav';
import SideNav from './SideNav';

class MainApp extends Component {
  render() {
    const { children, width } = this.props;
    return (
      <div>
        {width === 'xs' ? children : null}
        {width === 'xs' ? <BottomNav /> : <SideNav children={children}/>}
      </div>
    );
  }
}

MainApp.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(MainApp);
