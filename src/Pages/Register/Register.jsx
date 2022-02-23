import './Register.scss'

const Register = () => {
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
                    <input placeholder="Username" className='login-input' />
                    <input placeholder="Email" className='login-input' />
                    <input placeholder="Password" className='login-input' />
                    <input placeholder="Password Again" className='login-input' />
                    <button className="login-btn">Sign Up</button>
                    <button className="login-register-btn">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register