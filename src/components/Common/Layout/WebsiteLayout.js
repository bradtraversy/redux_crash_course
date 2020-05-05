import React, {Component} from 'react';
import Modal from "../../Modal/Modal";
import WebsiteHeader from "../Header/WebsiteHeader";
import WebsiteFooter from "../Footer/WebsiteFooter";
class Layout extends Component {
    render() {
        return (
            <div>
                <WebsiteHeader/>
                {this.props.children}
                <WebsiteFooter/>
                <Modal/>
            </div>
        );
    }
}

export default Layout;
