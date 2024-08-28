import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
  return (
    <main className='login'>
      <form>
      <h1>Login</h1>
        <div className="inputDiv">
            <label htmlFor="">Username</label>
            <input type="text" />
        </div>
        <div className="inputDiv">
            <label htmlFor="">Password</label>
            <input type="password" />
        </div>
        <button type='submit' id='logSubmit'>Submit</button>
        <hr />
        <p>Create a new account?</p>
        <button id='logRegister' onClick={() => { navigate("/register")}}>Register Account</button>
      </form>
    </main>
  )
}

export default Login
