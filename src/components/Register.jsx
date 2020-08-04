import React from "react";

function Register(props) {
  return (
    <div>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">{props.text}</button>
    </div>
  );
}

export default Register;
