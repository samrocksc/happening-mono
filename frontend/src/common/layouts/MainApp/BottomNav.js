import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import styled from 'styled-components';

import BottomContainer from './BottomContainer';

const StyledBottomNavigation = styled(BottomNavigation)`
  && {
  }
`;

class BottomNav extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <BottomContainer>
        <StyledBottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Events" icon={<MyLocationIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </StyledBottomNavigation>
      </BottomContainer>
    );
  }
}

export default BottomNav;
