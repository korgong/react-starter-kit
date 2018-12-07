import React from 'react';
import ReactDOM from 'react-dom';

// es5函数写法，下面的是es6的写法
// function Welcome(props) {
//     return <h1>hello, {props.name}</h1>
// }

class Welcome extends React.Component{
    constructor () {
        super();
    }
    render () {
        return <h1>hello, {this.props.name}</h1>;
    }
}

export { Welcome }
