import React from 'react';
import NavLink from "./NavLink";
import {useDispatch, useSelector} from "react-redux";
import {LOGOUT, TOGGLE_LOGIN, TOGGLE_SIGNUP, TOGGLE_UPLOAD} from "../../../actions/types";


const Header = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)
    const openLogin = () => {
        dispatch({type: TOGGLE_LOGIN})
    }
    const openSignUp = () => {
        dispatch({type: TOGGLE_SIGNUP})
    }
    const openUpload = () => {
        dispatch({type: TOGGLE_UPLOAD})
    }
    const routes = [{
        route: '/photo',
        label: 'Photos'
    }, {
        route: '/photographer',
        label: 'Photographer'
    }, {
        route: '/camera',
        label: 'Camera'
    }, {
        route: '/gear',
        label: 'Gear'
    }, {
        route: '/blog',
        label: 'Blog'
    }, {
        route: '/photo',
        label: 'Photos'
    }];
    const publicRoute = [{
        action: () => openLogin(),
        label: 'Login'
    }, {
        action: () => openSignUp(),
        label: 'Signup'
    },]
    const privateRoute = [{
        action: () => openUpload(),
        label: 'Upload'
    }, {
        action: () => dispatch({type: LOGOUT}),
        label: 'Logout'
    }]


    const actionRoute = () => {
        if (Object.keys(user).length) {
            return privateRoute.map(route => (
                <li className="nav-item " onClick={route.action}>
                    <a className="nav-link">{route.label}</a>
                </li>
            ))
        } else {
            return publicRoute.map(route => (
                <li className="nav-item " onClick={route.action}>
                    <a className="nav-link">{route.label}</a>
                </li>
            ))
        }
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
                    {routes.map(route => (
                        <NavLink to={route.route}>
                            <li className="nav-item ">
                                <p className="nav-link" href="#">{route.label}</p>
                            </li>
                        </NavLink>
                    ))}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className={'nav-item'}><a className="nav-link">{user&&user.name}</a></li>
                    {actionRoute()}

                </ul>
            </div>
        </nav>);
};

export default Header;
