'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Route } from 'react-router-dom';

import HelloWorld from './components/hello-world';

class App extends React.Component{
    render(){
        return (
            <Route exact path="/" render={(props) => (
                <HelloWorld data={this.props.data} />
            )} />
        );
    }
}

export default App;