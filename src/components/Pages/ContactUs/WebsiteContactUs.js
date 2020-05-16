import React from 'react';

const WebsiteContactUs = () => {
    return (
        <div>
            <section className="vdo_wrap">

                <div className="pro_wrp">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4 pr-0">
                            <div className="pro_pc">
                                <figure className="mb-0">
                                    <img className="img-fluid" src="/assets/images/profl.png"/>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-8">
                            <div className="pro_outr">

                                <div className="pro_sec pro_frm">
                                    <h6>Contact US</h6>

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control"></input>
                                    </div>

                                    <div className="form-group">
                                        <label>Contact Number</label>
                                        <input type="text" className="form-control"></input>
                                    </div>

                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input type="text" className="form-control"></input>
                                    </div>

                                    <div className="form-group">
                                        <label>Enquiry Related to</label>
                                        <input type="text" className="form-control"></input>
                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea row="6" className="form-control">
                </textarea>
                                    </div>

                                    <div className="enq_btn">
                                        <button>SEND</button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default WebsiteContactUs;
