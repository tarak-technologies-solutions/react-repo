import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assert/images/IMG20221021080919.jpg"


const Navbar = () => {
    return(
        <React.Fragment>
            <div className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" height= "40" width="120"/>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav -link"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/employees" className="nav -link"> Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav -link"> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav -link"> Contact Us </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <Link to="/login" className="nav -link"> Login </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav -link"> Register </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav -link"> Profile </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Navbar;