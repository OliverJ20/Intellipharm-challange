import React from 'react';
import ReactDOM from 'react-dom';
import history from './utils/history'
import './css/layout.css'
import './index.css';
import { Root } from './containers/Root'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Root
        history={history}
    />,
    document.getElementById('root')
)
