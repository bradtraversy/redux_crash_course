import React, {useState} from 'react';

const WebsiteImageInfo = () => {
    const [height, setHeight] = useState('0%')
    return (
        <div>
            <section className="vdo_wrap">
                <div className="img_cnt">
                    <img className="img-fluid" src="/assets/images/hindu-wedding.jpg"/>
                </div>

                <div className="view_dtl">
                    <div className="vw_dlt_hd hover">
                        <h6 onClick={()=>setHeight('100%')}>VIEW DETAILS</h6>
                        <img className="img-fluid" src="/assets/images/icon.svg"/>
                    </div>
                    <ul>
                        <li><img className="img-fluid" src="/assets/images/scnr.svg"/></li>
                        <li><img className="img-fluid" src="/assets/images/zoomin.svg"/></li>
                        <li><img className="img-fluid" src="/assets/images/zoomout.svg"/></li>
                        <li>DOWNLOAD</li>

                    </ul>
                </div>


                <div className="ovrly">
                    <div id="myNav" className="overlay" style={{height:height}}>
                        <a href="javascript:void(0)" className="closebtn" onClick={()=>setHeight('0%')}>&times;</a>
                        <div className="overlay-content ovrly_cnt">
                            <div className="container">
                                <h3>Wedding Ceremony Lorem ipsum.</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore
                                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                    duo dolores et ea rebum.
                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    Lorem ipsum dolor sit
                                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et dolore magna
                                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                                <div className="frm">
                                    <div className="form-group inp_txt">
                                        <input type="text" className="form-control inp_lft"></input>
                                        <input type="text" className="form-control inp_rgt"></input>
                                    </div>
                                    <div className="form-group inp_txt">
                                        <input type="text" className="form-control inp_lft"></input>
                                        <input type="text" className="form-control inp_rgt"></input>
                                    </div>
                                    <div className="form-group inp_txt">
                                        <input type="text" className="form-control inp_lft"></input>
                                        <input type="text" className="form-control inp_rgt"></input>
                                    </div>
                                    <div className="form-group inp_txt">
                                        <input type="text" className="form-control inp_lft"></input>
                                        <input type="text" className="form-control inp_rgt"></input>
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

export default WebsiteImageInfo;
