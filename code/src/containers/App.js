import React from 'react'
import { Route, Switch } from 'react-router'
import { routes } from '../utils/routes'
import { homePage } from './pages/HomePage'

export const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path={routes.homePage()} component={homePage} />
        </Switch>
    )
};
