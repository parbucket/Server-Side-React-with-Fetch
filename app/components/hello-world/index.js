import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'fetch-everywhere';

class HelloWorld extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <p>Disable JS on the page and everything still loads. Neat!!</p>
                <p>Name from Fetch API: {this.props.data.data[0].first_name}</p>
            </div>
        );
    }
}

export default HelloWorld;