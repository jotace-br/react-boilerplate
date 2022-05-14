import React from 'react'

import { Redirect, Switch } from 'react-router-dom'
import GuestRoute from './guest'
import PrivateRoute from './private'

// Pages
import { HelloWorld } from 'pages/HelloWorld'

const Routes: React.FC = () => (
  <Switch>
    <GuestRoute exact path="/" component={HelloWorld} />
    <PrivateRoute exact path="/hello" component={HelloWorld} />
    <Redirect to="/" />
  </Switch>
)
export default Routes
