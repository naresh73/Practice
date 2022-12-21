import './loginForm.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState({
    name : "",
    email : "",
    password : ""
   })

  function handleChange(e) {
    setData({
      ...data,
        [e.target.name] : e.target.value
    })
  }

  return (
    <main class="main">
      <div class="container">
        {
          (toggle) ? 
          <section class="wrapper">
          <div class="heading">
            <h1 class="text text-large">Sign In</h1>
            <p class="text text-normal">New user? <span><a href="/" class="text text-links">Create an account</a></span>
            </p>
          </div>
          <form name="signin" class="form">
            
          <div class="input-control">
              <label for="email" class="input-label" hidden>Email Address</label>
              <input type="email" name="email" id="email" class="input-field" placeholder="Email Address" />
            </div>
            <div class="input-control">
              <label for="password" class="input-label" hidden>Password</label>
              <input type="password" name="password" id="password" class="input-field" placeholder="Password" />
            </div>
            <div class="input-control">
              <a href="/" class="text text-links">Forgot Password</a>
              <button type="none" class="input-submit" onClick={() => setToggle(false)} >Sign In</button>
            </div>
          </form>
          <div class="striped">
            <span class="striped-line"></span>
            <span class="striped-text">Or</span>
            <span class="striped-line"></span>
          </div>
          <div class="method">
            <div class="method-control">
              <a href="/" class="method-action">
              <i class="fi fi-brands-google"></i>
                <span>Sign in with Google</span>
              </a>
            </div>
            <div class="method-control">
              <a href="/" class="method-action">
                <i class="ion ion-logo-facebook"></i>
                
                <span>Sign in with Facebook</span>
              </a>
            </div>
            <div class="method-control">
              <a href="/" class="method-action">
                <i class="ion ion-logo-apple"></i>
                <span>Sign in with Apple</span>
              </a>
            </div>
          </div>
        </section> 
        :
        <section class="wrapper">
          <div class="heading">
            <h1 class="text text-large">Sign up</h1>
            <p class="text text-normal">Already a user? <span><a href="/" class="text text-links">Login into your account</a></span>
            </p>
          </div>
          <form name="signin" class="form">
            
          <div class="input-control">
              <label for="name" class="input-label" hidden>name </label>
              <input type="text" name="name" class="input-field" placeholder="Name" 
              value={data.name}
              onChange={handleChange}
              />
            </div>
            <div class="input-control">
              <label for="email" class="input-label" hidden>Email </label>
              <input type="email" name="email" class="input-field" placeholder="Email Address" 
              value={data.email}
              onChange={handleChange}
              />
            </div>
            <div class="input-control">
              <label for="password" class="input-label" hidden>Password</label>
              <input type="password" name="password" class="input-field" placeholder="Password" 
              value={data.password}
              onChange={handleChange}
              />
            </div>
            <div class="input-control">
              <button type="none" class="input-submit" onClick={() => setToggle(true)} >Sign Up</button>
            </div>
          </form>
          <div class="striped">
            <span class="striped-line"></span>
            <span class="striped-text">Or</span>
            <span class="striped-line"></span>
          </div>
          <div class="method">
            <div class="method-control">
              <a href="/" class="method-action">
              <i class="fi fi-brands-google"></i>
                <span>Sign up with Google</span>
              </a>
            </div>
            <div class="method-control">
              <a href="/" class="method-action">
                <i class="ion ion-logo-facebook"></i>
                
                <span>Sign up with Facebook</span>
              </a>
            </div>
            <div class="method-control">
              <a href="/" class="method-action">
                <i class="ion ion-logo-apple"></i>
                <span>Sign up with Apple</span>
              </a>
            </div>
          </div>
        </section>
}
        
      </div>
    </main>
  )
}
