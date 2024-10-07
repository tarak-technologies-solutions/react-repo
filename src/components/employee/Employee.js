import React from "react";
import ImageOne from "../../assert/images/IMG20221021080919.jpg";
import ImageTwo from "../../assert/images/IMG20221021080836.jpg";

const Employee = () => {
    return (
        <React.Fragment>
            <section className="section-color p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Employee Lists</p>
                        </div>
                    </div>
                </div>
            </section>
           <section className="mt-3">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <p className="h3">Registered Employees</p>
                            </div>
                            <div className="card-body">
                                <table className="table table-hovertext-center table-striped">
                                    <thead>
                                        <tr>
                                            <th>Emp Number</th>
                                            <th>Emp Name</th>
                                            <th>Emp Email</th>
                                            <th>Emp Salary</th>
                                           
                                            <th>See More</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Tarak Nadh</td>
                                          <td>tharakanadh.battula@gmail.com</td>
                                          <td>60000.0</td>
                                          
                                          <td><button className="btn btn-info btn-sm">Details</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           </section>
        </React.Fragment>
    );
};
export default Employee;