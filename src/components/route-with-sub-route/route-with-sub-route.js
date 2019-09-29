import React from 'react';
import { Route } from "react-router-dom";

export default function RouteWithSubRoutes(route) {
    const { exact, path, routes } = route;
    return (
        <Route
            exact={exact}
            path={path}
            render={props => (
                <route.component {...props} routes={routes} />
            )}
        />
    );
}