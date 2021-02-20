import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

function HomePage() {
  const user = useSelector((state) => state.authentication.user);
  const userParse = JSON.parse(user);
  
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(userActions.getAll());
  }, []);

  return (
    <div>
      <h1>home</h1>
      {user &&
        <ul>
        <li>{userParse.data.id}</li>
        <li>{userParse.data.name}</li>
        <li>{userParse.data.operator}</li>
        </ul>
      }
    </div>
  );
}
export { HomePage };
