import React, { Component } from 'react';


class LoginForm extends Component {
    state = {  }
    render() { 
        return (
            <form action="#" id="loginForm">
                            <div className="form-group">
                                <label className="control-label" for="username">Username</label>
                                <input type="text" placeholder="example@gmail.com" title="Please enter you username" required="" value="" name="username" id="username" class="form-control"></input>
                                <span className="help-block small">Your unique username to app</span>
                            </div>
                            <div class="form-group">
                                <label className="control-label" for="password">Password</label>
                                <input type="password" title="Please enter your password" placeholder="******" required="" value="" name="password" id="password" class="form-control"></input>
                                <span className="help-block small">Yur strong password</span>
                            </div>
                        
                            <button className="btn btn-success btn-block loginbtn">Login</button>
                            <a className="btn btn-default btn-block" href="#">Register</a>
            </form>
        );
    }
}
 
export default LoginForm;