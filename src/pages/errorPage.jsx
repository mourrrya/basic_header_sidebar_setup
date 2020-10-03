import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="">
      <h1>Go back to Home</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
