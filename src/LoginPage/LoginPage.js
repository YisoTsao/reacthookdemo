import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  // const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    // dispatch(userActions.logout());
  }, []);

  function handleSubmit(e) {
    
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      const { from } = location.state || { from: { pathname: "/" } };
      console.log('from: '+from);
      console.log('location.state: '+location.state);
      
      dispatch(userActions.login(username, password, from));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }

  return (
    <>
      <form className="formBox" name="form" onSubmit={handleSubmit}>
        <h2> login </h2>{" "}
        <div>
          <div className="formLabel"> 帳號 </div>{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "input-box" + (submitted && !username ? " is-invalid" : "")
            }
          />{" "}
          {submitted && !username && (
            <div className="invalid-text"> 帳號為必填欄位 </div>
          )}{" "}
        </div>{" "}
        <div>
          <div className="formLabel"> 密碼 </div>{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "input-box" + (submitted && !password ? " is-invalid" : "")
            }
          />{" "}
          {submitted && !password && (
            <div className="invalid-text"> 密碼為必填欄位</div>
          )}{" "}
        </div>{" "}
        <div>
          <button className="loginBtn"> 登入 </button>{" "}
        </div>{" "}
      </form>{" "}
    </>
  );
}
export { LoginPage };
