import React from 'react'
import "./Login.scss"

const Login = () => {
  return (
    <div className='login'>
        <div>
            <div className='authentication-card'>
                <input type="text" placeholder='Email address or phonr number' />
                <input type="password" placeholder='Password' />
                <div className='login-button'>
                    <button>Log in</button>
                </div>
                <div className='forget-password'>
                    <p>Forgotten password?</p>
                </div>
                <div className='horizontal-line'></div>
                <div className='create-button'>
                    <button>Create new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login