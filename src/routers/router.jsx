import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/afterLogin/dashboard/dashboard";
import StartTest from "../pages/afterLogin/startTest/startTest";
import Survey from "../pages/afterLogin/survey/survey";
import Login from "../pages/beforeLogin/login/login";
import ErrorPage from "../pages/errorPage";

import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

const history = createBrowserHistory();
export default function ProjectRouter() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        <PrivateRoute path="/startTest" component={StartTest} exact={true} />
        <PrivateRoute path="/survey" component={Survey} exact={true} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}
