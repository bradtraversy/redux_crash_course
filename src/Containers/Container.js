import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Router from "./Router/Router";

import store from '../store';


class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route path="/" component={Router}/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Container;
