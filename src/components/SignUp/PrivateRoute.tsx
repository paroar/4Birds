import React, { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "./../../context/Auth";

interface PrivateRouteProps extends RouteProps {
    component: any
}

const PrivateRoute = ( props: PrivateRouteProps ) => {
    const { component: RouteComponent, ...rest } = props;
    //@ts-ignore
    const {currentUser} = useContext(AuthContext);
    return (
        <Route 
            {...rest}
            render={routeProps => 
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/"} />
                )
            }
        />
    );
};

export default PrivateRoute;