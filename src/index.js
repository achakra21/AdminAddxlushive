import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Register from './Register';

import './index.css';
import {Route, Router } from 'react-router';

ReactDOM.render( 
<Router> 
<div> 
<Route path="/" component={App} /> 
<Route path="/login" component={Login} /> 
<Route path="/register" component={Register} /> 
</div> 
</Router>, 
document.getElementById('root') 
)
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
