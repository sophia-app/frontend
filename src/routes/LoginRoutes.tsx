import { Route } from "react-router";
import { Login } from "../pages/Login";

export const LoginRoutes: JSX.Element[] = [
    <Route exact path="/login" component={Login} />
];
