import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class NavLink extends Component {
    render() {
        const isActive = window.location.pathname === this.props.to;
        const className = isActive ? 'active' : '';

        return (
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};
export default NavLink;
