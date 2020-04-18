import React, { Component } from 'react';


class LoginForm extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <div className="row vertical-offset-100">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please sign in</h3>
                            </div>
                            <div className="panel-body">
                                <form accept-charset="UTF-8" role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="E-mail" name="email" type="text"></input>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" type="password"></input>
                                    </div>
                                    <div className="checkbox">
                                        <div>
                                            <input name="remember" type="checkbox" value="Remember Me"></input>
                                            Remember Me
                                        </div>
                                    </div>
                                    <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"></input>
                                </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginForm;