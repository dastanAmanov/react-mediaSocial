import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">
                    Mediasocial
                </h3>
                <span className="login-desc">
                    Connect with friends and the world around yo on Mediasocial
                </span>
            </div>
            <div className="login-right">
                <div className="login-box">
                    <input placeholder="email" className='login-input' />
                    <input placeholder="password" className='login-input' />
                    <button className="login-btn">Log In</button>
                    <span className="login-forgot">Forgot Password?</span>
                    <button className="login-register-btn">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login