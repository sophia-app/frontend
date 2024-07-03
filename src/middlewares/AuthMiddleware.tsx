import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { Redirect, useLocation } from "react-router-dom";

type AuthMiddlewareProps = {
    children: ReactNode;
}

export const AuthMiddleware = ({ children } : AuthMiddlewareProps) => {
    const { isAuth } = useAuth();
    const { pathname } = useLocation();

    return (
        isAuth === true ? children : <Redirect to={{ pathname: "/login", state: { from: pathname } }} />
    )
}
