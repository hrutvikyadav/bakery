import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

class ContactForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container
              as={Form}
              onSubmit={this.props.handlesubmit}
              id = 'contact-info'
              >
                {/* name input
                    email input,
                    phome,
                    city */}
                <Form.Label htmlFor="name">Enter name</Form.Label>
                <Form.Control
                    type="text"
                    id="name"
                    value={this.props.name}
                    onChange={this.props.handlechange}
                    disabled={this.props.disabled}
                />

                <Form.Label htmlFor="email">Enter email</Form.Label>
                <Form.Control
                    type="text"
                    id="email"
                    value={this.props.email}
                    onChange={this.props.handlechange}
                    disabled={this.props.disabled}
                />

                <Form.Label htmlFor="message">Enter message</Form.Label>
                <Form.Control
                    type="text"
                    id="message"
                    value={this.props.message}
                    onChange={this.props.handlechange}
                    disabled={this.props.disabled}
                />

                <br></br>

                { !this.props.disabled
                    ? <Button 
                        variant="primary"
                        type="submit"
                        active>
                        Submit
                    </Button>
                        : <Button
                            variant="primary"
                            type="submit"
                            active
                            >Edit
                        </Button> }
            </Container>
        )
    }
}

export default ContactForm;