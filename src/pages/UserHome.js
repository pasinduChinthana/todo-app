import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import NewToDo from "../components/NewToDo";

class UserHome extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <Container>
                <NewToDo
                    show = {true}
                    onHide = {()=>console.log('closing')}
                    />
            </Container>
        );
    }

}

export default UserHome;