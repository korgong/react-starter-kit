import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import {Welcome} from './demo/Component/reactComponent.js'

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );


ReactDOM.render(
    <Welcome name='sara' />,
    document.getElementById('root')
);


