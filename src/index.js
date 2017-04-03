import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

import './index.css';
import {Route, Router,browserHistory } from 'react-router';

ReactDOM.render( 
<Router history={browserHistory}> 
 
<Route path="/" component={App} /> 
<Route path="/login" component={Login} /> 
<Route path="/register" component={Register} /> 
<Route path="/forgotpassword" component={ForgotPassword} />
</Router>, 
document.getElementById('root') 
)
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
