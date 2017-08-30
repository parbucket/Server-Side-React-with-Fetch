'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

import App from './app.js';

/**
 * Components
 */

class Client extends React.Component{
    render(){
        return (
            <BrowserRouter basename="/app">
                <App />
            </BrowserRouter>
        );
    }
}

export default Client;