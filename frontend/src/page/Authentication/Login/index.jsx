import React, { useState } from 'react'
import "./Login.scss"
import { Modal } from 'antd';

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='login'>
            <div>
                <div>
                    <h1 className='heading'>Crew Chat</h1>
                    <h2 className=''>Crew Chat helps you connect and <br />
                     share with the people in your life.</h2>
                </div>
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
                    <div className='create-button' onClick={()=>setIsModalOpen(true)}>
                        <button>Create new account</button>
                    </div>
                    <Modal title="Basic Modal" centered open={isModalOpen} onCancel={()=>setIsModalOpen(false)}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Login