import React from "react";
import PrivateHeader from "../header/privateHeader";
import jsCookie from "js-cookie";
import { Redirect } from "react-router-dom";
export default function PrivateRoute({ component, ...rest }) {
  const token = jsCookie.get("adminToken");
  return (
    <>
      {!!token ? (
        <PrivateHeader component={component} {...rest} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
