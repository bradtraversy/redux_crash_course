import React from 'react';

const WebsiteHeader = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md nvbr">
                    <button className="navbar-toggler collps_btn" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                    </button>

                    <div className="collapse navbar-collapse navg top_nv" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">STUDIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">IMAGES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">VIDEOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CAMERA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GEARS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PHOTO STORY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav  rgt_nvbr">
                            <li className="nav-item">
                                <a className="nav-link" href="#">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SIGN UP</a>
                            </li>
                        </ul>
                    </div>

                    <div className="logo_img">
                        <figure className="mb-0">
                            <img className="img-fluid" src="/assets/images/logo.jpg" />
                        </figure>
                    </div>
                </nav>
            </header>
            <section className="sidenav sidmnu_wrp">
                <div>
                    <h6>PIXWINE<br></br>PHOTOGRAPHY</h6>
                    <hr></hr>
                    <div className="sd_bdg">
                        <a href="#about">Wedding</a>
                        <div>
                            <span className="badge">536</span>
                        </div>
                    </div>
                    <div className="sd_bdg">
                        <a href="#services">Wildlife</a>
                        <div>
                            <span className="badge">25</span>
                        </div>
                    </div>
                    <div className="sd_bdg">
                        <a href="#clients">Landscape</a>
                        <div>
                            <span className="badge">59</span>
                        </div>
                    </div>
                    <div className="sd_bdg">
                        <a href="#contact">Micro</a>
                        <div>
                            <span className="badge">48</span>
                        </div>
                    </div>
                    <div className="sd_bdg">
                        <a href="#contact">Macro</a>
                        <div>
                            <span className="badge">115</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteHeader;
