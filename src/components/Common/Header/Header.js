import React from 'react';
import NavLink from "./NavLink";
const Header = () => {
    return (
        <nav>
            <ul className="nav nav-pills pull-right">
                <NavLink to="/photo">
                    <i className="glyphicon glyphicon-home"></i> <span>Photo</span>
                </NavLink>
                <NavLink to="/camera">
                    <i className="glyphicon glyphicon-camera"></i> <span>Camera</span>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Header;
