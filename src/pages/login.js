import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css'
import './css/loginform/loginstyle.css'

import LoginForm from '../components/loginForm';

class Login extends Component {
    state = {  }
    render() { 
        return (  
            <LoginForm></LoginForm>
        );
    }
}
 
 export default Login;