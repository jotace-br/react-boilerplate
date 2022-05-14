import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { Layout } from 'containers/Layout'
// import { isAuthenticated } from 'services/login'

const PrivateRoute = ({ component, title, ...rest }: any) => {
  const routeComponent = (props: any) =>
    [1].includes(1) ? (
      React.createElement(component, props, title)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  // React.createElement(component, props, title);
  return [1].includes(1) ? (
    <Layout>
      <Route {...rest} render={routeComponent} />
    </Layout>
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  )
}

export default PrivateRoute
