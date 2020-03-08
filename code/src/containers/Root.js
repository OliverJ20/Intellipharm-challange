import React, { PureComponent } from 'react'
import { Router } from 'react-router'
import { App } from './App'

export class Root extends PureComponent {
    render () {
        const {history } = this.props

        return (
            <Router history={history}>
                <App />
            </Router>
        )
    }
}
