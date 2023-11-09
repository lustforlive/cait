import React, {Component} from 'react';
import {Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <Container style={{width:'500px'}}>
                <h1 className="text-center"> Свяжитесь с нами </h1>
                <Form>
                    <FormGroup controlId="formBasicEmail" className="mt-4">
                        <FormLabel> Your email </FormLabel>
                        <FormControl type="email" placeholder="Enter email"/>
                        <FormText>
                            Ваш email не будет отправлен кому-либо
                        </FormText>
                    </FormGroup>
                    <FormGroup controlId="formBasicPassword" className="mt-4">
                        <FormLabel> Your password </FormLabel>
                        <FormControl as="textarea" rows="2"/>
                    </FormGroup>
                    <FormGroup controlId="formBasicCheckbox" className="mt-4">
                        <FormCheck type="checkbox" label="Chek me out" />
                    </FormGroup>
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;