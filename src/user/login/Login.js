import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <React.Fragment>
            <section className="registration-section p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Employee Login Form</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="card">
                                <div className="card-header bg-dark text-center">
                                    <p className="h3">Login Here</p>
                                </div>
                                <div className="card-body registration-section">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" alt="" className="form-control" placeholder="Enter email id"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" alt="" className="form-control" placeholder="Enter the password"/>
                                        </div>
                                        <div>
                                            <input type="submit" className="btn btn-dark btn-sm" value="Login"/>
                                        </div>
                                        <div>
                                            <label>Dont't have an account ? 
                                                <span><Link to="/register"> Register</Link></span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default Login;