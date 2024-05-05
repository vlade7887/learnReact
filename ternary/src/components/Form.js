import React from "react";

function Form(props) {
  console.log(props)
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegister &&
      <input type="password" placeholder="Confirm Password" />
    }
      <button type="submit">{!props.isRegister ? "Register": "Login"}</button>
    </form>
  );
}

export default Form;
