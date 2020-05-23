import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Index from '../components/Index'
import Checkout from '../components/Checkout'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Register from '../components/Register'

export default function Routes () {
  return (
    <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" render={() => <Login baseUrl='https://dev-aym445gf.au.auth0.com/' />} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/register" component={Register} />
        <Route component={Index} />
        <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  )
}
