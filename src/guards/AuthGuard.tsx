import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Redirect, useLocation } from "react-router-dom";

type AuthGuardProps = {
    children: React.ReactNode;
}

export const AuthGuard = ({ children } : AuthGuardProps) => {
    const { isAuth } = useAuth();
    const { pathname } = useLocation();

    return (
        isAuth === true ? children : <Redirect to={{ pathname: "/login", state: { from: pathname } }} />
    )
}
