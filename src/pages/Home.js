import React from 'react'
import {Container, Button} from 'react-bootstrap'

const Home = () => {
    return (
        
            <Container className="bg-light pt-5 pl-4 mt-5">
                <h1 className="display-3 font-italic">
                    Welcome!
                </h1>
                <p className="font-weight-bold">
                    Our todo list app is cloud based so you can access it from 
                    anywhere, anytime, anyplace.....
                </p>
                <p className="display-5">
                    
                    <div className="row d-flex ">
                        <div className="col-3">
                            Stil not registered.<br/>
                            <Button className="btn-info">Sign Up</Button><br/>
                        </div>
                        <div className="col-3">
                            <br/>
                            <Button className="btn-success">Sign In</Button>
                        </div>
                    </div>
                    
                    
                </p>
            </Container>
       
    )
}

export default Home
