import React from "react";
import teja from "../../assert/images/Teja.jpg"

const Profile = () => {
    return (
        <React.Fragment>
            <section className="registration-section p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">User's Profile</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-3">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header registration-section">
                                <img src={teja} alt="Teja" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body registration-section">
                                <h3 className="card-title">Teja.P</h3>
                                <p>Salesforce Developer</p>
                                <p>Hyderabad</p>
                                <p>80000.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Profile;