import React, { useState } from 'react'
import "./Login.scss"
import { Modal } from 'antd';
import Register from '../Register';

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [auth, setAuth] = useState('');
    const handleChange = ()=>{
        setAuth(prev=>({...prev, [e.taget.name] : e.target.value}))
    }
    const handleSubmit=()=>{}
    return (
        <div className='login'>
            <div className=''>
                <div>
                    <h1 className='heading'>Crew Chat</h1>
                    <h2 className=''>Crew Chat helps you connect and <br />
                     share with the people in your life.</h2>
                </div>
                <div className='authentication-card'>
                    <input onChange={handleChange} name='email' type="text" placeholder='Email address or phonr number' />
                    <input onChange={handleChange} name='password' type="password" placeholder='Password' />
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
                    <Modal 
                        centered 
                        open={isModalOpen} 
                        onCancel={false}
                        closable={false}
                        style={{padding: 0}}
                        bodyStyle={{padding: 0, border:"none" }}
                        footer={false}
                    >
                        <Register setIsModalOpen={setIsModalOpen} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Login