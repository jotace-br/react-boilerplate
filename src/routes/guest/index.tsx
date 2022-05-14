import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// import { isAuthenticated } from 'services/login'

const GuestRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    [1].includes(1) ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/' }} />
    )
  return <Route {...rest} render={routeComponent} />
}

export default GuestRoute
