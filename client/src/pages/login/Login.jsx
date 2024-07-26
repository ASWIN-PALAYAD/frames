import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const email = useRef();
  const password = useRef(); 

  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Frames</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Frames..
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              className="loginInput"
              ref={email}
              required
              placeholder="Email"
            />
            <input
              type="password"
              className="loginInput"
              ref={password}
              required
              placeholder="Password"
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? <CircularProgress /> : "Login"}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress /> : "Create new account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
