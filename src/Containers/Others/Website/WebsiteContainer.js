import React, {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import WebsiteLayout from "../../../components/Common/Layout/WebsiteLayout";
import NotFound from "../NotFound";

const user = ["pixwine"]
const routes = [
    {
        path: '/',
        component: lazy(() => import('../../../components/Pages/Dashboard/WebsiteHome')),
        exact: true,
    }, {
        path: '/profile',
        component: lazy(() => import('../../../components/Pages/Dashboard/WebsiteProfile')),
        exact: true,
    }, {
        path: '/blogs',
        component: lazy(() => import('../../../components/Pages/Blog/WebsiteBlog')),
        exact: true,
    }, {
        path: '/blog/:id',
        component: lazy(() => import('../../../components/Pages/Blog/WebsiteblogInfo')),
        exact: true,
    }, {
        path: '/cameras',
        component: lazy(() => import('../../../components/Pages/Camera/WebsiteCamera')),
        exact: true,
    }, {
        path: '/camera/:id',
        component: lazy(() => import('../../../components/Pages/Camera/WebsiteCameraInfo')),
        exact: true,
    },
    {
        path: '/images',
        component: lazy(() => import('../../../components/Pages/Image/WebsiteImage')),
        exact: true,
    }, {
        path: '/image/:id',
        component: lazy(() => import('../../../components/Pages/Image/WebsiteImageInfo')),
        exact: true,
    },
    {
        path: '/videos',
        component: lazy(() => import('../../../components/Pages/Video/WebsiteVideo')),
        exact: true,
    }, {
        path: '/video/:id',
        component: lazy(() => import('../../../components/Pages/Video/WebsiteVideoInfo')),
        exact: true,
    },
    {
        path: '/contact',
        component: lazy(() => import('../../../components/Pages/ContactUs/WebsiteContactUs.js')),
        exact: true,
    },{
        path: '/service',
        component: lazy(() => import('../../../components/Pages/Service/WebsiteServices')),
        exact: true,
    },{
        path: '/about',
        component: lazy(() => import('../../../components/Pages/AboutUs/WebsiteAboutUs')),
        exact: true,
    },{
        path: '/upload',
        component: lazy(() => import('../../../components/Pages/Upload/WebsiteUpload')),
        exact: true,
    }
];
const WebsiteContainer = () => {
    const path = window.location.pathname.split('/')[1]
    return (
            user.includes(path) ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {routes.map((route, idx) => (
                                <Route exact={route.exact} key={idx} path={`/${path}${route.path}`}>
                                    <WebsiteLayout>
                                        <route.component/>
                                    </WebsiteLayout>
                                </Route>
                            ))}
                        </Switch>
                        <Route component={NotFound}/>
                    </Suspense>
                ) :
                <NotFound/>
        );
    };

export default WebsiteContainer;
