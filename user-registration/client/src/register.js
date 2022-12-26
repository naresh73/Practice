import React from 'react';
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    async function register() {
        const { name, email, password, confirm_password } = data;

        if (name && email && password && confirm_password) {
            if (password !== confirm_password) {
                alert("password didn't match")
            }
            else {
                await axios.post("http://localhost:8000/register", data)
                .then((res) => {
                    alert(res.data.message)
                    res.data.user ? navigate("/") : navigate("/register")  
                })
            }
        }
    }

    return (
        <main className="main">
            <div className="container">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text text-large">Sign up</h1>
                        <p className="text text-normal">Already a user? <span><a className="text text-links" onClick={() => navigate("/")}>Login into your account</a></span>
                        </p>
                    </div>
                    <form name="signin" className="form">

                        <div className="input-control">
                            <label htmlFor="name" className="input-label" hidden>name </label>
                            <input type="text" name="name" className="input-field" placeholder="Name"
                                value={data.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="email" className="input-label" hidden>Email </label>
                            <input type="email" name="email" className="input-field" placeholder="Email Address"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="password" className="input-label" hidden>Password</label>
                            <input type="password" name="password" className="input-field" placeholder="Password"
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="confimr_password" className="input-label" hidden>Confirm Password</label>
                            <input type="password" name="confirm_password" className="input-field" placeholder="Confirm Password"
                                value={data.confirm_password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-control">
                            <p className="input-submit"
                                onClick={register}
                            >Sign Up</p>
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
                                <span>Sign up with Google</span>
                            </a>
                        </div>
                        <div className="method-control">
                            <a href="/" className="method-action">
                                <i className="ion ion-logo-facebook"></i>

                                <span>Sign up with Facebook</span>
                            </a>
                        </div>
                        <div className="method-control">
                            <a href="/" className="method-action">
                                <i className="ion ion-logo-apple"></i>
                                <span>Sign up with Apple</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
