import React, { useState } from "react";
import "./login.css";

export default function Login() {

    return (
        <div className = "login">
            <header>Todo-List App</header>

            <p className="p1">Welcome Back!</p>

            <p className="p2">SIGN IN</p>

            <form name="form">

                <div className = "row">
                    <div className = "sec1">
                        <label>Email</label><br/><br/><br/>
                        <label>Password</label><br/>
                    </div>

                    <div className = "sec2">
                        <input type="email" id="email" size="30" required/><br/><br/><br/>
                        <input type="password" id="password" size="30" required/>
                    </div>
                </div>

                <input type="checkbox" name="rememberme" id="customControlInline"/>
                <label className = "checkbox">Remember me</label><br/><br/>

                <button type="submit">Sign In</button>

                <p>Don't have an account? <span><a href="#">Sign Up</a></span></p>
                <a href="#">Forgot your password?</a>

            </form>
        </div>
    );

}
