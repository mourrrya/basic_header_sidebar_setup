import React from "react";
import { Route, Redirect } from "react-router-dom";
import jsCookie from "js-cookie";
export default function PublicRoute({ component: Component, ...rest }) {
  const token = jsCookie.get("adminToken");
  return (
    <>
      {!!token ? (
        <Redirect to="/dashboard" />
      ) : (
        <Route
          {...rest}
          component={(props) => {
            return <Component {...props} />;
          }}
        />
      )}
    </>
  );
}
