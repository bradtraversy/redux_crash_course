import React from 'react';
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, TOGGLE_LOGIN, TOGGLE_SIGNUP, TOGGLE_UPLOAD } from "../../../actions/types";
import './style.scss'

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const openLogin = () => {
        dispatch({ type: TOGGLE_LOGIN })
    }
    const openSignUp = () => {
        dispatch({ type: TOGGLE_SIGNUP })
    }
    const openUpload = () => {
        dispatch({ type: TOGGLE_UPLOAD })
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
        action: () => dispatch({ type: LOGOUT }),
        label: 'Logout'
    }]


    const actionRoute = () => {
        if (Object.keys(user).length) {
            return privateRoute.map(route => (
                <li className="nav-item hover" onClick={route.action}>
                    <a className="nav-link">{route.label}</a>
                </li> 
            ))
        } else {
            return publicRoute.map(route => (
                <li className="nav-item hover" onClick={route.action}>
                    <a className="nav-link">{route.label}</a>
                </li>
            ))
        }
    }


    return (
        <div>
            <header>
                <div className="headerLeftSection">
                    <div className="headerLogoSection">
                        <NavLink to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="main_logo" viewBox="0 0 594 171">
                                <g id="Group_242" data-name="Group 242" transform="translate(-11958 1551)">
                                    <rect id="Rectangle_736" data-name="Rectangle 736" width="48" height="24"
                                        transform="translate(12037 -1477)" fill="#272727" />
                                    <rect id="Rectangle_738" data-name="Rectangle 738" width="72" height="24"
                                        transform="translate(12037 -1508)" fill="#272727" />
                                    <rect id="Rectangle_737" data-name="Rectangle 737" width="24" height="24"
                                        transform="translate(12037 -1446)" fill="#272727" />
                                    <rect id="Rectangle_739" data-name="Rectangle 739" width="24" height="24"
                                        transform="translate(12006 -1446)" fill="#1f67e3" />
                                    <rect id="Rectangle_740" data-name="Rectangle 740" width="24" height="24"
                                        transform="translate(11982 -1477)" fill="#fbb03b" />
                                    <rect id="Rectangle_741" data-name="Rectangle 741" width="24" height="24"
                                        transform="translate(11958 -1508)" fill="#d95e50" />
                                    <text id="FLICAF" transform="translate(12143 -1423)" fill="#272727" fontSize="122"
                                        fontFamily="Poppins-Bold, Poppins" fontWeight="700">
                                        <tspan x="0" y="0">FLICAF</tspan>
                                    </text>
                                </g>
                            </svg>
                        </NavLink>

                    </div>

                    <div className="headerNavWrap">
                        <ul>
                            {routes.map(route => (
                                <NavLink to={route.route}>
                                    <li >
                                        <span>{route.label}</span>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </div>
       

                <div className="headerRightSection">
                    <div className="search_wrap">
                        <button className="btn btn-default">
                            <img src="/assets/images/portalicons/search.svg" className="headerIcon" />
                        </button>
                    </div>
                    <div className="categoryWrap">
                        <div className="dropdown">
                            <button type="button" className="btn btn-default dropdown-toggle category" data-toggle="dropdown">Category <img src="/assets/images/portalicons/arrow.svg" className="headerIcon" /></button>
                          
                        </div>
                    </div>
                    <div className="profileWrap">
                        <img src="/assets/images/portalicons/profile.jpg" className="img-fluid" />
                       {user && user.name}
                        {actionRoute()} - ithentha
                    </div>
                    <div className="notification_wrap">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <img src="/assets/images/portalicons/notification.svg" className="headerIcon" />
                        </button>
                       
                    </div>
                    <div className="accountSettings_wrap">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <img src="/assets/images/portalicons/settings.svg" className="headerIcon" />
                        </button>
                      
                    </div>
                </div>
            </header>            
            </div>
            );


};

export default Header;



