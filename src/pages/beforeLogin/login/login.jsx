import React from "react";
import { Button } from "antd";
import jsCookie from "js-cookie";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const handleLogin = () => {
    jsCookie.set("adminToken", "tokenWillBeSet");
    history.push("/dashboard");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <h1>Admin Login</h1>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </header>
    </div>
  );
}
