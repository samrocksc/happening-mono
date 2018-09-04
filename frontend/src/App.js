import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { RouteWithLayout } from './common/components';
import { CenteredBox, MainApp } from './common/layouts';
import Login from './views/Login';
import Logout from './views/Logout';
import Callback from './views/Callback';
import Home from './views/Home';
import MainMap from './views/MainMap';
import Events from './views/Events';
import Settings from './views/Settings';

class App extends Component {
  render() {
    return (
      <Route>
        <Switch>
          <RouteWithLayout layout={CenteredBox} exact path="/" component={Home} />
          <RouteWithLayout layout={CenteredBox} exact path="/login" component={Login} />
          <RouteWithLayout layout={MainApp} exact path="/home" component={Home} />
          <RouteWithLayout layout={MainApp} exact path="/Events" component={Events} />
          <RouteWithLayout layout={MainApp} exact path="/MainMap" component={MainMap} />
          <RouteWithLayout layout={MainApp} exact path="/Settings" component={Settings} />
          <Route
            path="/callback"
            render={props => {
              return <Callback {...props} />;
            }}
          />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Route>
    );
  }
}

export default App;
