import React, { useState } from 'react';
import "./Register.scss";
import { MdOutlineHelp } from "react-icons/md"
import { GrFormClose } from "react-icons/gr";
import { months, days, years } from "../../../JSON/Date"

const Register = ({setIsModalOpen}) => {
  const [auth, setAuth] = useState('');
  const handleChange = (e)=>{
    setAuth(prev=>({...prev, [e.target.name] : e.target.value}))
  }
  console.log(auth)
  const handleSubmit=()=>{}
  const date = new Date();
  const Month = date.toLocaleString('default', { month: 'long' });
  var Day = String(date.getDate()).padStart(2, '0');
  var Year = date.getFullYear();
  return (
    <div className='register'>
      <section className="header">
        <div className="text-area">
          <h1>Sign Up</h1>
          <p>It's quick and easy</p>
        </div>
        <GrFormClose className='cursor-pointer' onClick={()=>setIsModalOpen(false)} size={28}/>
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
          <select name="" id="">
            <option value="">{Day}</option>
            {
              days.map((day)=>
                <option value={day} style={{backgroundColor: Day === day ? "blue" :""}}>{day}</option>
              )
            }
          </select>
          <select name="" id="">
            <option value="">{Month}</option>
            {
              months.map((month)=>
                <option value="months" style={{backgroundColor: Month === month ? "blue" :""}}>{month}</option>
              )
            }
          </select>
          <select name="" id="">
            <option value="">{Year}</option>
            {
              years.map((year)=>
                <option value={year} style={{backgroundColor: Year === year ? "blue" :""}}>{year}</option>
              )
            }
          </select>
        </div>
      </section>

      {/* gender section */}
      <section className='gender-container'>
        <h3>Gender <MdOutlineHelp/></h3> 
        <div className='gender'>
          <div className='gender-items'>
            <input onChange={handleChange} className='input' value="female" type="radio" name="gender" id="" /> 
          </div>
          <div className='gender-items'>
            <input onChange={handleChange} className='input1' value="male" type="radio" name="gender" id="" />
          </div>
          <div className='gender-items'>
            <input onChange={handleChange} className='input2' value="custom" type="radio" name="gender" id="" />
          </div>
        </div>
      </section>
      {
        auth.gender === "custom" ?
        <section className="custom-gender">
          <div>
            <select name="" id="">
              <option value="">Select your pronoun</option>
              <option value="She">She: "Wish her a happy Birthday"</option>
              <option value="They">They: "Wish them a happy Birthday"</option>
            </select>
            <div className='my-2'>
              <p >Your pronoun is visible to everyone.</p>
            </div>
            <input type="text" onChange={handleChange} name="custom-gender" placeholder='Gender (optional)' id="" />
          </div>
        </section>
        :
        null
      }
      
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