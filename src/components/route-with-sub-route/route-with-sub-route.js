import React from 'react';
import { Route } from "react-router-dom";

export default function RouteWithSubRoutes(route) {
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}