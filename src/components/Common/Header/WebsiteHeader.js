import React from 'react';
import NavLink from "./NavLink";
import {TOGGLE_LOGIN, TOGGLE_SIGNUP} from "../../../actions/types";
import {useDispatch, useSelector} from "react-redux";

const routes = [{
    title: "HOME",
    link: '/'
}, {
    title: "IMAGES",
    link: '/images'
}, {
    title: "VIDEOS",
    link: '/videos'
}, {
    title: "CAMERA",
    link: '/cameras'
}, {
    title: "PROFILE",
    link: '/profile'
}, {
    title: "BLOG",
    link: '/blogs'
}, {
    title: "SERVICES",
    link: '/service'
}, {
    title: "ABOUT",
    link: '/about'
}, {
    title: "CONTACT",
    link: '/contact'
},]
const WebsiteHeader = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const openLogin = () => {
        dispatch({type: TOGGLE_LOGIN})
    }
    const openSignUp = () => {
        dispatch({type: TOGGLE_SIGNUP})
    }
    const path = window.location.pathname.split('/')[1]
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
                            {routes.map((route, id) => (
                                <NavLink to={`/${path}${route.link}`} key={id}>
                                    <li className="nav-item">
                                        <a className="nav-link">{route.title}</a>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>

                        <ul className="navbar-nav  rgt_nvbr">
                            <NavLink>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => openLogin()}>LOGIN</a>
                                </li>
                            </NavLink>
                            <NavLink>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => openSignUp()}>SIGN UP</a>
                                </li>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="logo_img">
                        <figure className="mb-0">
                            <img className="img-fluid" src="/assets/images/logo.jpg"/>
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
