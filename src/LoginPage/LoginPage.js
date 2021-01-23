import React, { useState, useEffect } from "react";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      console.log('check');
  }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  return (
    <>
      
      <form className="formBox" name="form" onSubmit={handleSubmit}>
      <h2>login</h2>
        <div>
          <div>Username</div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "input-box" + (submitted && !username ? " is-invalid" : "")
            }
          />
          {submitted && !username && (
            <div className="invalid-text">Username is required</div>
          )}
        </div>

        <div>
          <div>Password</div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "input-box" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && <div className="invalid-text">Password is required</div>}
        </div>
        <div>
          <button>
            Login
          </button>
        </div>
      </form>
    </>
  );
}
export { LoginPage };
