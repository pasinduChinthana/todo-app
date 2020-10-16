import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function getSingleToDo(props){



    return (
        <Card className={"mt-2 mb-2"}>
            <Row>
                <Col lg={10}>
                    <Card.Body>{props.task}</Card.Body>
                </Col>
                <Col lg={2}>
                    <Card.Body style={{padding:"15px",paddingRight:"25px"}}>
                  <Row className={"float-right"}>
                      {props.isRemaining?
                          <Button variant={"success"} className={"mr-2"} taskId={props.id} onClick={()=> handleDeleteTask(props.id, props.userId)}>
                              Done
                          </Button>
                          :null
                      }
                      <Button variant={"warning"} taskId={props.id} onClick={()=> handleDeleteTask(props.id, props.userId)}>
                          Delete
                      </Button>
                  </Row>
                    </Card.Body>

                </Col>
            </Row>
        </Card>
    );
}

function handleDeleteTask(){

}

function handleCompleteTask(){

}