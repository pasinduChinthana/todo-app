import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import AddNewToDo from "../components/AddNewToDo";
import SingleToDo from "../components/SingleToDo";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const initialRemainingTasks = [
    {task: "go to library", id:'1234'},
    {task: "buy apples", id:'2234'},
    {task: "complete assignments", id:'3234'},
]

const initialCompletedTasks = [
    {task: "go to gym", id:'6234'},
    {task: "book an airline ticket", id:'5234'},
    {task: "complete assignments", id:'4234'},
]


class UserHome extends Component{
    constructor(props) {
        super(props);
        this.state={
            addNewTask : false,
            tabKey : "remaining",
            remainingTasks: initialRemainingTasks,
            completedTasks: initialCompletedTasks 
        }
    }

    showAddNewTask = () => {
        return (
            <AddNewToDo
                show = {true}
                onHide = {()=>this.setState({addNewTask:false})}
                onSubmit = {()=>console.log('onsubmit')}
            />
        );
    }

    setTabKey = (key) => {
        this.setState({tabKey:key});
    }

    handleDeleteTask(id, status) {
        if (status === "completed") {
            this.setState({
                completedTasks: this.state.completedTasks.filter(task => task.id !== id)
            })
        } else {
            this.setState({
                remainingTasks: this.state.remainingTasks.filter(task => task.id !== id)
            })
        }
    }

    handleCompleteTask(task) {
        this.setState({
            completedTasks: this.state.completedTasks.concat([task]),
            remainingTasks: this.state.remainingTasks.filter(i => i.id !== task.id)
        })
    }


    render() {
        return(
            <Container>
                <Row className={"p-3"}>
                    <Col xs={8} md={8}>
                        <h4>User</h4>
                    </Col>
                    <Col xs={4} md={4}>
                        <Button className={"float-right"} onClick={()=>this.setState({addNewTask:true})}>
                            Add +
                        </Button>
                    </Col>
                </Row>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={this.state.tabKey}
                        onSelect={(k) => this.setTabKey(k)}
                    >
                        <Tab eventKey="remaining" title="Remaining">
                            {this.state.remainingTasks.map((task, index)=>{
                                return(
                                    <SingleToDo
                                        isRemaining = {true}
                                        task = {task}
                                        id = {task.id}
                                        userId = {"1111"}
                                        handleCompleteTask={(task) => this.handleCompleteTask(task)}
                                        handleDeleteTask={(id, status) => this.handleDeleteTask(id, "remaining")}
                                    />
                                );
                            })}
                        </Tab>
                        <Tab eventKey="completed" title="Completed">
                            {this.state.completedTasks.map((task, index)=>{
                                return(
                                    <SingleToDo
                                        isRemaining = {false}
                                        task = {task}
                                        id = {task.id}
                                        userId = {"1111"}
                                        handleDeleteTask={(id, status) => this.handleDeleteTask(id, "completed")}
                                    />
                                );
                            })}
                        </Tab>

                    </Tabs>

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