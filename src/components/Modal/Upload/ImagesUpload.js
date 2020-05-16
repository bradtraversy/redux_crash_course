import React from 'react';
const ImagesUpload = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Category</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Select Category"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Description</label>
                            <textarea type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Description"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-6">

            </div>
        </div>
    );
};

export default ImagesUpload;
