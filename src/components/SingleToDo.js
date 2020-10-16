import React, {Component} from 'react';

import Card from 'react-bootstrap';
import Row from 'react-bootstrap';
import Col from 'react-bootstrap';


export default function getSingleToDo(){
    return (
        <Card>
            <Row>
                <Col lg={10}>
                    <Card.Body>{this.props.task}</Card.Body>
                </Col>
                <Col lg={2}>

                </Col>
            </Row>
        </Card>
    );
}