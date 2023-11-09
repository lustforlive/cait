import React, {Component} from 'react';
import {Button, Container, Form, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";

class Newprof extends Component {
    render() {
        return (
            <div>
                <Container style={{width:'5000px'}}>
                    <h1 className="text-center"> Регистрация </h1>
                    <Form>
                        <FormGroup controlId="formBasicEmail" className="mt-4">
                            <FormLabel> Ваш email </FormLabel>
                            <FormControl type="email" placeholder="Enter email"/>
                            <FormText>
                                Ваш email под защитой
                            </FormText>
                        </FormGroup>
                        <FormGroup controlId="formBasicPassword" className="mt-4">
                            <FormLabel> Придумайте пароль </FormLabel>
                            <FormControl as="textarea" rows="1" placeholder="Enter password"/>
                        </FormGroup>
                        <FormGroup controlId="formBasicPassword" className="mt-4">
                            <FormLabel> Введите пароль повторно </FormLabel>
                            <FormControl as="textarea" rows="1" placeholder="Enter password"/>
                        </FormGroup>

                        <Button className="m-3 position-absolute" variant="outline-dark" type="submit" id="profil" href="/profil">
                            Войти
                        </Button>

                    </Form>

                </Container>
            </div>
        );
    }
}

export default Newprof;