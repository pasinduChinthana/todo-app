import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import usericon from './images.png'
import  './RegisterForm.css'

class RegisterForm extends Component {

    constructor() {
        super();
        this.state ={
            email:"",
            emailtouched:0,
            password:"",
            passwordtouched:0,
            retypepassword:"",
            retypepasstouched:0,
            name:"",
            nametouched:0,
            passvalidation:0
        }
    }

    handleEmailchange = (event) =>{
           this.setState({
               email:event.target.value,
               emailtouched:1
           })

    }
    handlePasswordchange = (event) =>{
        this.setState({
            password:event.target.value,
            passwordtouched:1
        })

    }
    handleRetypepasschange = (event)=>{

        this.setState({
             retypepassword:event.target.value,
            retypepasstouched:1
        })

        if(this.state.password==this.state.retypepassword && this.state.retypepasstouched) {
            this.setState({
                passvalidation: 1
            })
        }
        else{
            this.setState({
                passvalidation:0

            })
        }
    }

    handleNamechange = (event) =>{
          this.setState({
              name:event.target.value,
              nametouched:1
          })
    }
    handleSubmit = (event) =>{

        if(this.state.passvalidation===1 && this.state.name!=" " && this.state.password!=" " && this.state.email!=" "){
            console.log(this.state)
            event.preventDefault();
        }


    }




    render() {
        return (
            <div className="Container body shadow-lg p-4 mb-4 bg-white" >
                <h2>Hello user Register and Import Your Tasks</h2>
                <Image src={usericon} rounded />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="input" type="email" name="email" onBlur={this.touched} value={this.state.email} onChange={this.handleEmailchange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {!this.state.email&&this.state.emailtouched ?<span className="error"> required </span>:null }
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="input" type="password" name="password" value={this.state.password} onChange={this.handlePasswordchange}  placeholder="Password" />
                        {!this.state.password && this.state.passwordtouched?<span className="error">required</span> :null}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re-type Password</Form.Label>
                        <Form.Control className="input" type="password" name="retypepassword" value={this.state.retypepassword} onChange={this.handleRetypepasschange} placeholder="Password" />
                        {!this.state.retypepassword && this.state.retypepasstouched? <span className="error">required&nbsp;&nbsp;</span> :null}
                        {!this.state.passvalidation && this.state.retypepasstouched ?<span className="error"> Password Are Not Matching </span> :null}

                     </Form.Group>
                     <br/>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Display name</Form.Label>
                        <Form.Control className="input" type="text" name="name" value={this.state.name} onChange={this.handleNamechange} placeholder="Name"/>
                        {!this.state.name && this.state.nametouched ? <span className="error">required</span>  :null}
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit" name="registerbtn">
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;