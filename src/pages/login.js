import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl, FormCheck, Button, Card } from "react-bootstrap";
import "./login.css";

export default function Login() {

    return (
        <Card className="text-center card" style={{ width: '50rem' }}>
            <header>Todo-List App</header>

            <p className="p1">Welcome Back!</p>

            <p className="p2">SIGN IN</p>

            <form name="form">

                <div className = "row">
                    <div className = "sec1">
                        <FormGroup controlId="formEmailLabel">
                            <FormLabel>Email</FormLabel>
                        </FormGroup>
                        <FormGroup controlId="formPasswordLabel">
                            <FormLabel>Password</FormLabel>
                        </FormGroup>
                    </div>

                    <div className = "sec2">
                        <FormGroup controlId="formEmail">
                            <FormControl type="email" id="email" placeholder="Enter email" size="30" required/>
                        </FormGroup>
                        <FormGroup controlId="formPassword">
                            <FormControl type="password" id="password" placeholder="Password" size="30" required/>
                        </FormGroup>
                    </div>
                </div>

                <FormGroup controlId="formCheckbox">
                    <FormCheck type="checkbox" name="remember_me" label="Check me out" />
                </FormGroup>

                <Button variant="dark" type="submit">Sign In</Button>

                <p>Don't have an account? <span><a href="#">Sign Up</a></span></p>
                <a href="#">Forgot your password?</a>

            </form>
        </Card>
    );

}
