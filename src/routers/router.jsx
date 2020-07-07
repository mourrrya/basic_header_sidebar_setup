import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Dashboard from "../pages/afterLogin/dashboard/dashboard";
import Login from "../pages/beforeLogin/login/login";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const history = createBrowserHistory();
export default function ProjectRouter() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
      </Switch>
    </Router>
  );
}
