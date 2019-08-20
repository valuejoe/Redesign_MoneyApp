import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AuthMain from './auth/AuthMain';
import Login from './auth/Login';
const Main = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={AuthMain} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </HashRouter>
    )
}

export default Main