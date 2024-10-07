import React from "react";

const Home =() =>{
    return(
        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column text-center justify-content-center">
                    <p>A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.</p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;