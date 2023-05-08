import React, { useState } from 'react';
import "./Register.scss";
import { MdOutlineHelp } from "react-icons/md"
import { GrFormClose } from "react-icons/gr"

const Register = ({setIsModalOpen}) => {
  const [auth, setAuth] = useState('');
  const handleChange = ()=>{
    setAuth(prev=>({...prev, [e.taget.name] : e.target.value}))
  }
  const handleSubmit=()=>{

  }
  return (
    <div className='register'>
      <section className="header">
        <div className="text-area">
          <h1>Sign Up</h1>
          <p>It's quick and easy</p>
        </div>
        <GrFormClose onClick={()=>setIsModalOpen(false)} size={28}/>
      </section>
      <hr className="divider" />
      <div className='input-container'>
        <div className='sub-input'>
          <input onChange={handleChange} name='fName' type="text" placeholder='First name' />
          <input onChange={handleChange} name='sName' type="text" placeholder='Surname' />
        </div>
        <input type="text" onChange={handleChange} name='number' placeholder='Mobile number or email address' />
        <input onChange={handleChange} name='password' type="password" placeholder='New password' />
      </div>

      {/* date of birth */}
      <section className='date-section'>
        <h3>Date of birth <MdOutlineHelp/></h3> 
        <div className='date-container'>
          <input onChange={handleChange} type="date" name="" id="" />
          <input onChange={handleChange} type="date" name="" id="" />
          <input onChange={handleChange} type="date" name="" id="" />
        </div>
      </section>

      {/* gender section */}
      <section className='gender-container'>
        <h3>Gender <MdOutlineHelp/></h3> 
        <div className='gender'>
          <div className='gender-items'>
            {/* <label htmlFor="female">Female</label> */}
            <input onChange={handleChange} className='input' type="radio" name="" id="" /> 
          </div>
          <div className='gender-items'>
            <input onChange={handleChange} className='input1' type="radio" name="" id="" />
          </div>
          <div className='gender-items'>
            <input onChange={handleChange} className='input2' type="radio" name="" id="" />
          </div>
        </div>
      </section>
      {/* terms and policy */}
      <section className="terms-and-policy">
        <p>People who use our service may have uploaded your contact information to Crew chat. </p>
        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive email notifications from us and can opt out at any time.</p>
      </section>
      {/* sing up button */}

      <div className='sign-up'>
        <button onClick={handleSubmit}>Sign up</button>
      </div>
    </div>
  )
}

export default Register