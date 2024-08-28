import React, { useState } from 'react';
import '../Styles/global.css';
import { NavLink } from "react-router-dom";

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <nav>
      <h1>Blogger</h1>
      <div>
      <NavLink to="/"><h3>Home</h3></NavLink>
      <NavLink to="/yourBlogs"><h3>Your Blogs</h3></NavLink>
      </div>
      {isLoggedIn ? <button style={{backgroundColor:"red"}}>Logout</button> : <button style={{backgroundColor:"green"}}>Login</button>}
    </nav>
  )
}

export default Header
