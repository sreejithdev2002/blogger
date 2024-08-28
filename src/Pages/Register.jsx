import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();
  return (
    <main className='register'>
      <form>
      <h1>Register</h1>
        <div className="inputDiv">
            <label htmlFor="">Username</label>
            <input type="text" />
        </div>
        <div className="inputDiv">
            <label htmlFor="">Email</label>
            <input type="email" />
        </div>
        <div className="inputDiv">
            <label htmlFor="">Password</label>
            <input type="password" />
        </div>
        <div className="inputDiv">
            <label htmlFor="">Confirm Password</label>
            <input type="password" />
        </div>
        <button type='submit' id='regSubmit'>Submit</button>
        <hr />
        <p>Already created an Account?</p>
        <button id='regLogin' onClick={() => { navigate("/login")}}>Go To Login</button>
      </form>
    </main>
  )
}

export default Register
