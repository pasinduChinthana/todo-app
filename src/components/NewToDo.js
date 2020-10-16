import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class NewToDo extends Component{


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
                   <Form>
                       <Form.Group controlId="formBasicEmail">
                           <Form.Label>New Task</Form.Label>
                           <Form.Control type="text" placeholder="Enter your task here"  required/>
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

export default NewToDo;