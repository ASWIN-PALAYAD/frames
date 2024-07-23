import './register.css'

const Register = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Frames</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Frames..
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" className="loginInput" placeholder='Username'/>
                    <input type="text" className="loginInput" placeholder='Email'/>
                    <input type="text" className="loginInput" placeholder='Password'/>
                    <input type="text" className="loginInput" placeholder='Confirm Password'/>
                    <button className='loginButton'>Register</button>
                    <button className='loginRegisterButton'>
                       Log into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register