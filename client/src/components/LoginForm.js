import React, {useState} from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const LoginForm = () => {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    const loginChangeHandler = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name] : e.target.value
        })
    }
    const loginSubmitHandler = (e) => {
        e.preventDefault();
        console.log("login attempt");
        axios.post("http://localhost:8000/api/users/login", loginUser)
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch(err => console.log("Error with login", err))
    }
    return (
        <div>
            <div className="loginbox">
                <h2 className="p-4">Login</h2>
            <form className="form" onSubmit={loginSubmitHandler}>
                <div className="form-group">
                    <div className="input-icons">
                        <input className="form-control" type="email" name="email" placeholder="Email Address*" onChange={e => loginChangeHandler(e)}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-icons">
                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={e => loginChangeHandler(e)}/>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
                {
                    errors ? 
                    errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)
                    : ""
                }
            </form>

            </div>
        </div>
    )
}

export default LoginForm
