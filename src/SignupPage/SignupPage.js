import React, { useState, useEffect } from "react";

function SignupPage() {
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
      alert('check');
  }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  return (
    <div>
      <h1>Sign-up</h1>
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "form-box" + (submitted && !username ? " is-invalid" : "")
            }
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "form-box" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && <div>Password is required</div>}
        </div>
        <div>
          <button>
            {/* {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )} */}
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export { SignupPage };
