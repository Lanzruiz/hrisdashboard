import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css'
import './style.css'
import LoginForm from '../components/loginForm';

class Login extends Component {
    state = {  }
    render() { 
        return (  
            <div className="error-pagewrap">
                <div className="error-page-int">
                    <div className="text-center m-b-md custom-login">
                        <h3>PLEASE LOGIN TO APP</h3>
                        <p>This is the best app ever!</p>
                    </div>
                    <div className="content-error">
                        <div className="hpanel">
                           <div className="panel-body">
                                <LoginForm></LoginForm>
                           </div>
                       </div>
                    </div>
                    <div class="text-center login-footer">
                       <p>Copyright © 2018. All rights reserved. Template by <a href="https://colorlib.com/wp/templates/">Colorlib</a></p>
                    </div>
                </div>   
            </div>
        );
    }
}
 
 export default Login;