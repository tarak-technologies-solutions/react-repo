import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    let [register,setRegister] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        deptNO : '',
        salary : ''
    });

    // hadle change
    let hadleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        });
    };

    let submitRegister = (e) => {
        e.preventDefault();
        console.log(register);
    }

    return (
        <React.Fragment>
            <section>
                <div className="registration-section p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Employee Registration form</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 m-auto animate__animated animate__bounce">
                        <div className="card">
                            <div className="card-header bg-dark text-center">
                                <p className="h3">
                                    Registration Form
                                </p>
                            </div>
                            <div className="card-body registration-section">
                                <form onSubmit={submitRegister}>
                                    <div className="form-group">
                                        <input 
                                        name="firstName"
                                        value={register.firstName}
                                        onChange={hadleChange}
                                        type="text" className="form-control" placeholder="Enter first name"/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="lastName"
                                        value={register.lastName}
                                        onChange={hadleChange}
                                        type ="text" className="form-control" placeholder="Enter last name"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <input 
                                        name="email"
                                        value={register.email}
                                        onChange={hadleChange}
                                        type="email" className="form-control" placeholder="Emterthe email"/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="password"
                                        value={register.password}
                                        onChange={hadleChange}
                                        type="password" className="form-control" placeholder="Enter the password"/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="deptNO"
                                        value={register.deptNO}
                                        onChange={hadleChange}
                                        type="number" className="form-control" placeholder="Enter the dept no"/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name="salary"
                                        value={register.salary}
                                        onChange={hadleChange}
                                        type="number" className="form-control" placeholder="Enter the salary"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-dark btn-sm" value="Register"/>
                                    </div>
                                    <div>
                                        <p>Alreadry have an account ? <span className="color-word"><Link to="/login">Login</Link></span></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Register;