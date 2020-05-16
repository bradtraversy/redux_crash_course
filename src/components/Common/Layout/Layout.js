import React, {Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import Modal from "../../Modal/Modal";
class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
                <Modal/>
            </div>
        );
    }
}

export default Layout;
