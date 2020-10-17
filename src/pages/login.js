import React from "react";
import "./login.css";

export default function Login() {

    return (
        <div className = "login">
            <header>Todo-List App</header>

            <p className = "p1">Welcome Back!</p>

            <p className = "p2">SIGN IN</p>

            <form>

                <div className = "row">
                    <div className = "sec1">
                        <label>Email</label><br/><br/><br/>
                        <label>Password</label><br/>
                    </div>

                    <div className = "sec2">
                        <input type="text" id="email" size="30"/><br/><br/>
                        <input type="text" id="password" size="30"/>
                    </div>
                </div>

                <button type="submit">Sign In</button>

            </form>
        </div>
    );

}