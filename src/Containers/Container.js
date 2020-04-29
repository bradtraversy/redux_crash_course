import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from "./Home/Home";
import Profile from "./Profile/Profile";


import store from '../store';

class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/profile" exact component={Profile} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default Container;
