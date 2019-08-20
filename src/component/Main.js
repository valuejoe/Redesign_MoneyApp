import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AuthMain from './auth/AuthMain';
import Login from './auth/Login';
import Signup from './auth/Signup'
const Main = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={AuthMain} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
            </Switch>
        </HashRouter>
    )
}

export default Main