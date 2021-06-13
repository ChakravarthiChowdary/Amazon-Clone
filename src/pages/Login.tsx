import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../store/store";
import { auth } from "../firebase";
import { LOGGED_IN } from "../store/actions";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInClickedHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => dispatch({ type: LOGGED_IN, payload: authUser.user }))
      .catch((error) => alert(error.message));
  };

  const signUpClickedHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) =>
        user.user?.updateProfile({ displayName: email.split("@")[0] })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="amazon logo"
        />
      </Link>
      <div className="login__box">
        <h1>Sign-In</h1>
        <p>Email</p>
        <input
          type="email"
          className="login__email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          className="login__password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__signInButton" onClick={signInClickedHandler}>
          Sign In
        </button>
        <p className="login__terms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          className="login__registerButton"
          onClick={signUpClickedHandler}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
