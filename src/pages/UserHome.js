import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import NewToDo from "../components/NewToDo";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

class UserHome extends Component{
    constructor(props) {
        super(props);
        this.state={
            addNewTask : false
        }
    }

    showAddNewTask = () => {
        return (
            <NewToDo
                show = {true}
                onHide = {()=>this.setState({addNewTask:false})}
                onSubmit = {()=>console.log('onsubmit')}
            />
        );
    }


    render() {
        return(
            <Container>
                <Row className={"p-3"}>
                    <Col xs={12} md={8}>
                        <h4>User' Todo List</h4>
                    </Col>
                    <Col xs={12} md={4}>
                        <Button className={"float-right"} onClick={()=>this.setState({addNewTask:true})}>
                            Add +
                        </Button>
                    </Col>
                </Row>
                {
                    this.state.addNewTask?
                       this.showAddNewTask()
                        : null
                }
            </Container>
        );
    }

}

export default UserHome;