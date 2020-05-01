import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "../../components/Common/Layout/Layout";
import NotFound from "../Others/NotFound";
const routes = [
    {
        path: '/',
        component: lazy(() => import('../../components/Pages/Image/Image')),
        exact: true,
    },{
        path: '/photo',
        component: lazy(() => import('../../components/Pages/Image/Image')),
        exact: true,
    }, {
        path: '/photographer',
        component: lazy(() => import('../../components/Pages/Photographer/Photographer')),
        exact: true,
    }, {
        path: '/camera',
        component: lazy(() => import('../../components/Pages/Camera/Camera')),
        exact: true,
    }, {
        path: '/blog',
        component: lazy(() => import('../../components/Pages/Blog/Blog')),
        exact: true,
    }, {
        path: '/gear',
        component: lazy(() => import('../../components/Pages/Gear/Gear')),
        exact: true,
    },{
        path: '/profile',
        component: lazy(() => import('../../components/Pages/Dashboard/Profile')),
        exact: true,
    },{
        path: '/edit-profile',
        component: lazy(() => import('../../components/Pages/Dashboard/EditProfile')),
        exact: true,
    },{
        path: '/change-password',
        component: lazy(() => import('../../components/Pages/Dashboard/ChangePassword')),
        exact: true,
    },{
        path: '/about-us',
        component: lazy(() => import('../../components/Pages/AboutUs/AboutUs')),
        exact: true,
    },{
        path: '/privacy-policy',
        component: lazy(() => import('../../components/Pages/PrivacyPolicy/PrivacyPolicy')),
        exact: true,
    },{
        path: '/contact-us',
        component: lazy(() => import('../../components/Pages/ContactUs/ContactUs')),
        exact: true,
    }
];

class Router extends Component {
    constructor({match}) {
        super();
        this.path = match
    }

    render() {
        return (
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route, idx) => (
                            <Route exact={route.exact} key={idx} path={`${route.path}`}>
                                <route.component/>
                            </Route>
                        ))}
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </Layout>
        );
    }
}

export default Router;
