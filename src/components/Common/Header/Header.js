import React from 'react';
import NavLink from "./NavLink";
import {useDispatch} from "react-redux";
import {TOGGLE_LOGIN, TOGGLE_SIGNUP, TOGGLE_UPLOAD} from "../../../actions/types";


const Header = () => {
    const dispatch = useDispatch();
    const openLogin = () => {
        dispatch({type: TOGGLE_LOGIN})
    }
    const openSignUp = () => {
        dispatch({type: TOGGLE_SIGNUP})
    }
    const openUpload = () => {
        dispatch({type: TOGGLE_UPLOAD})
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/">
                <p className="navbar-brand">FLICAF</p>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavLink to="/photo">
                        <li className="nav-item ">
                            <p className="nav-link" href="#">PHOTOS</p>
                        </li>
                    </NavLink>
                    <NavLink to="/camera">
                        <li className="nav-item ">
                            <p className="nav-link" href="#">CAMERA</p>
                        </li>
                    </NavLink>
                    <NavLink to="/photographer">
                        <li className="nav-item ">
                            <p className="nav-link" href="#">PHOTOGRAPHER</p>
                        </li>
                    </NavLink>
                    <NavLink to="/gear">
                        <li className="nav-item ">
                            <p className="nav-link" href="#">GEAR</p>
                        </li>
                    </NavLink>
                    <NavLink to="/blog">
                        <li className="nav-item ">
                            <p className="nav-link" href="#">BLOG</p>
                        </li>
                    </NavLink>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item " onClick={()=>openLogin()}>
                        <a className="nav-link" href='#'>Login</a>
                    </li>
                    <li className="nav-item " onClick={()=>openSignUp()}>
                        <a className="nav-link" href='#'>Sign Up</a>
                    </li>
                    <li className="nav-item " onClick={()=>openUpload()}>
                        <a className="nav-link" href='#'>Upload</a>
                    </li>
                </ul>
            </div>
        </nav>);
};

export default Header;
