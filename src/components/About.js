import React from "react";

export default function About(props) {
  return (
    <div className="container my-5">
      <h1>About {props.title}.</h1>
      <p>Version 1.0.0</p>
    </div>
  );
}
