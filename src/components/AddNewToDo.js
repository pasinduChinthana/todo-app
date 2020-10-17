import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddNewToDo extends Component{
    constructor() {
        super();
        this.state = {
            newTask : ''
        }
    }

    handleOnChange = (value) => {
        this.setState({newTask : value});
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit();
    }

    render() {
       return(
           <Modal
               {...this.props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
           >
               <Modal.Header closeButton>
                   <Modal.Title id="contained-modal-title-vcenter">
                       Add New Task
                   </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <Form onSubmit={(e)=>this.onSubmit(e)}>
                       <Form.Group controlId="formBasicEmail">
                           <Form.Label>New Task</Form.Label>
                           <Form.Control type="text" placeholder="Enter your task here"
                                         value={this.state.newTask}
                                         onChange={(e)=> this.handleOnChange(e.target.value)}
                                         required/>
                           <Form.Text className="text-muted">
                               Charactor limit 200
                           </Form.Text>
                       </Form.Group>
                       <Button type="submit" className={"float-right"}>Submit</Button>
                   </Form>
               </Modal.Body>
           </Modal>
       );
    }

}

export default AddNewToDo;