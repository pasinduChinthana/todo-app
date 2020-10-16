import React, {Component} from 'react';
import Image from'react-bootstrap/Image';
import usericon from './images.png'
class RegisterForm extends Component {
    render() {
        return (
            <div>
                <Image src={usericon} rounded />
            </div>
        );
    }
}

export default RegisterForm;