import React from 'react';
import './Documentation.css';

function Documentation(){
    return(
    <div form-wrapper>
        <div className="form-container">
            <div className="title_container">                
                <h1>Upload Documentation</h1>
                <form>
                    <div className="row">
                        <div className="col-25">
                         <label>Certified Copy of ID:</label>
                        </div>
                    <div className="col-75">
                        <input type="file" placeholder="Upload"  />
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                         <label>Birth Certificate:</label>
                        </div>
                    <div className="col-75">
                        <input type="file" placeholder="Upload"  />
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                         <label>Passport (For non RSA citizens):</label>
                        </div>
                    <div className="col-75">
                        <input type="file" placeholder="Upload"  />
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                         <label>Medical Scripts:</label>
                        </div>
                    <div className="col-75">
                        <input type="file" placeholder="Upload"  />
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                         <label>Proof of Registration (Students):</label>
                        </div>
                    <div className="col-75">
                        <input type="file" placeholder="Upload"  />
                    </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-25">
                         <label>Relevant Medical Records:</label>
                        </div>
                    <div className="col-75">
                        <input type="file" placeholder="Upload"  />
                    </div>
                    </div>

                    <button className="btnSave" onClick="">Save</button>
                    <button className="btnCancel" onClick="window.location='./Client';return false;">Cancel</button>
                    
                </form>
            </div>
        </div>
    </div>

    );

}

export default Documentation;
