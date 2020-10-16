import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import usericon from './images.png'
import  './RegisterForm.css'

class RegisterForm extends Component {


    render() {
        return (
            <div class="Container body shadow-lg p-4 mb-4 bg-white" >
                <h2>Hello user Register and Import Your Tasks</h2>
                <Image src={usericon} rounded />

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="input" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="input" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re-type Password</Form.Label>
                        <Form.Control className="input" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Display name</Form.Label>
                        <Form.Control className="input" type="text" placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;