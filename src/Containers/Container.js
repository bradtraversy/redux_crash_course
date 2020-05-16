import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import Router from "./Router/Router";

import store from '../store';

const browserHistory = createBrowserHistory({ queryKey: false })

class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter history={browserHistory}>
                    <Route path="/" component={Router}/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Container;
