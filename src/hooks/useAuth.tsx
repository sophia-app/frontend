import React from "react";
import { AuthContextProps } from "../contexts/AuthContext";

export const useAuth = () : AuthContextProps => {
    const [isAuth, setIsAuth] = React.useState<boolean>(false);

    const login = () => {
        new Promise((resolve) => {
            setIsAuth(true);
            resolve(true);
        });
    };

    const logout = () => {
        new Promise((resolve) => {
            setIsAuth(false);
            resolve(true);
        });
    };

    return {
        isAuth,
        login,
        logout,
    };
}
