import React, {Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/footer";
class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;
