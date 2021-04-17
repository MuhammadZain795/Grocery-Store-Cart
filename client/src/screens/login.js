import React, { useState, useEffect } from 'react';
import '../css/login.css';
import Axios from 'axios'

export default function Login() {
    const [name, setname]=useState('');
    const [pass,setPass]=useState('');

    const submitReview = () =>{
        Axios.post('http://localhost:3001/api/login', {
            name: name, 
            pass: pass,
        }).then(()=>{
                alert("successful login");
            });
    };
  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" 
          onChange={text=>setname(text.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" 
          onChange={text=>setPass(text.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={submitReview}>Submit</button>
        </div>
      </form>
    </div>
  )
}