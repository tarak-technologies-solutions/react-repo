import React from "react";
import Photo from "../../assert/images/IMG20221021080836.jpg"

const ContactUs = () => {
    return (
        <React.Fragment>
            <section className="section-color p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Contact Us..!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="card">
                                <div className="card-body bg-dark">
                                    <div className="text-center">
                                        <p className="h3">Please contact this person to know more..!</p>
                                        <div >
                                            <img src={Photo}  alt="" width="50%" height="50%"/>
                                        </div>
                                      <div>
                                        <label>Person Name : Linga Reddy</label>
                                      </div>
                                      <div>
                                        <label>
                                            Contact Number : 7396353270
                                        </label>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default ContactUs;