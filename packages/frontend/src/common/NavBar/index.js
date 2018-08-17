import React, { Component } from 'react';
import { Navigation, NavigationHeader, NavigationLink } from 'happening-components';

class NavBar extends Component {
  state = { showMenu: false };

  toggleMenu = () => this.setState(state => ({ showMenu: !state.showMenu }));

  render() {
    const { showMenu } = this.state;

    return (
      <Navigation container>
        <Navigation header onClick={this.toggleMenu}>
          <button
            className={`hamburger hamburger--spin ${showMenu ? 'is-active' : null}`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
            <NavigationHeader>Shit&apos;s Happening</NavigationHeader>
          </button>
        </Navigation>
        {showMenu ? (
          <Navigation>
            {' '}
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/event">Submit</NavigationLink>
          </Navigation>
        ) : null}
      </Navigation>
    );
  }
}

export default NavBar;
