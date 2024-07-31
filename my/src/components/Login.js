import React from 'react';
import './Login.css';
import loginimg from '../images/projectwall.jpeg'


const Login = () => {
  return (
    <div>
      <h2 style={{fontSize:'40px'}}>B.planet</h2>
      <div className="login-container" style={{marginTop:'0px'}}>
        <div className="login-image"> <img src={loginimg} ></img></div>
         <div  className="login-form">
         <h2>Login</h2>
            <form>
              <label>Email</label>
              <input type="email" placeholder="abc@gmail.com" />
              <label>Password</label>
              <input type="password" placeholder="****" />
              <button type="submit">Login</button>
              <p><a href='#'>Forget Password?</a></p>
              <p>Don't have an account yet? <a href='#'>Sign up for free </a></p>
            </form>
         </div>
      </div>
    </div>
  );
};

export default Login;