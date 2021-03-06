import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const RegisterForm = () => {
    const [errors, setErrors] = useState([]);
    const changeHandler = (e) => {
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        });
    };
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        axios
        .post("http://localhost:8000/api/users", user)
        .then((response) => {
            console.log(response);
            if (response.data.message === "error") {
            const errorResponse = response.data.errors;
            const errorArr = [];
            console.log(errorResponse);
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
            } else {
            setUser({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setErrors("");
            navigate("/");
            }
        })
        .catch((err) => console.log("Errors with post", err));
    };
    return (
        <div>
        <div className="loginbox">
            <form onSubmit={submitHandler}>
            <h2 className="p-4">Register New User</h2>
            <div className="form-group">
                <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Enter User Name*"
                onChange={(e) => changeHandler(e)}
                />
            </div>

            <div className="form-group">
                <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email Address*"
                onChange={(e) => changeHandler(e)}
                />
            </div>
            <div className="form-group">
                <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => changeHandler(e)}
                />
            </div>
            <div className="form-group">
                <input
                className="form-control"
                type="password"
                name="confirmPassword"
                placeholder="Confirm"
                onChange={(e) => changeHandler(e)}
                />
            </div>
            <button  className="btn btn-primary"  type="submit">Register</button>
            {errors
                ? errors.map((err, index) => (
                    <p style={{ color: "red" }} key={index}>
                    {err}
                    </p>
                ))
                : ""}
            </form>
        </div>
        </div>
    );
};

export default RegisterForm;
