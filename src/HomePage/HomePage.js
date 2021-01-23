import React, { useState, useEffect } from "react";

function HomePage() {
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
      <h1>home</h1>
      
    </div>
  );
}
export { HomePage };
