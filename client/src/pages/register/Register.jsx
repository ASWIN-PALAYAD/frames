import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();

  const email = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleClick = async(e) => {
    e.preventDefault();
    if(confirmPassword.current.value !== password.current.value){
        password.current.setCustomValidity("Password dont match")
    }else{
        const user = {
            username : username.current.value,
            email : email.current.value,
            password : password.current.value
        }
        try {
            await axios.post('/api/auth/register',user);
            navigate('/login')

        } catch (error) {
            console.log(error);
        }
    }
  }

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
              type="text"
              className="loginInput"
              required
              ref={username}
              placeholder="Username"
            />
            <input
              type="email"
              className="loginInput"
              required
              ref={email}
              placeholder="Email"
            />
            <input
              type="password"
              className="loginInput"
              required
              ref={password}
              placeholder="Password"
              minLength={'6'}
            />
            <input
              type="text"
              className="loginInput"
              required
              ref={confirmPassword}
              placeholder="Confirm Password"
            />
            <button type="submit" className="loginButton">Register</button>
          </form>
            <Link to={'/login'} className="loginRegisterButton">Log into Account</Link>
      </div>
        </div>
    </div>
  );
};

export default Register;
