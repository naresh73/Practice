import './loginForm.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import { authActions } from './store';
import { loginUser, LogoutUser } from './redux/actions';

export default function LoginForm() {
  
  const navigate = useNavigate()
  const [data, setData] = useState({
    email : "",
    password : ""
  })

  const dispatch = useDispatch()
  const isLokedIn = useSelector(state => state.userReducers)
  console.log(isLokedIn)
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  async function Login() {
    const {email, password} = data;
    await axios.post("http://localhost:8000/login", data)
    .then((res) => {
      if(res.data.user.password === password) {
        alert(res.data.message)
        localStorage.setItem("userID", res.data.user.email)
        dispatch(loginUser)
        navigate("/home")
      }

      else {
        alert("incorrect password")
      }
    })
  }

  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign In</h1>
            <p className="text text-normal">New user? <span><a className="text text-links" onClick={() => navigate("/register")} >Create an account</a></span>
            </p>
          </div>
          <form name="signin" className="form">

            <div className="input-control">
              <label htmlFor="email" className="input-label" hidden>Email Address</label>
              <input type="email" name="email" id="email" className="input-field" placeholder="Email Address" 
              value={data.email}
              onChange={handleChange}
              />
            </div>
            <div className="input-control">
              <label htmlFor="password" className="input-label" hidden>Password</label>
              <input type="password" name="password" id="password" className="input-field" placeholder="Password" 
              value={data.password}
              onChange={handleChange}
              />
            </div>
            <div className="input-control">
              <a href="/" className="text text-links">Forgot Password</a>
              <p className="input-submit"
              onClick={Login}
              >Sign In</p>
            </div>
          </form>
          <div className="striped">
            <span className="striped-line"></span>
            <span className="striped-text">Or</span>
            <span className="striped-line"></span>
          </div>
          <div className="method">
            <div className="method-control">
              <a href="/" className="method-action">
                <i className="fi fi-brands-google"></i>
                <span>Sign in with Google</span>
              </a>
            </div>
            <div className="method-control">
              <a href="/" className="method-action">
                <i className="ion ion-logo-facebook"></i>

                <span>Sign in with Facebook</span>
              </a>
            </div>
            <div className="method-control">
              <a href="/" className="method-action">
                <i className="ion ion-logo-apple"></i>
                <span>Sign in with Apple</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
