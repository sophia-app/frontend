import { ReactNode, createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

export type AuthContextProps = {
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    login: () => {},
    logout: () => {}
});

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export const AuthConsumer = () => {
    return useContext(AuthContext);
}
