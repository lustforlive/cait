import React, {Component} from 'react';
import {
    Button, Card, CardGroup, Col,
    Container,
    Form,
    FormCheck,
    FormControl,
    FormGroup,
    FormLabel,
    FormText, Nav, Navbar,
    NavLink, Row, TabContainer, TabContent, TabPane
} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from "react-router-dom";

import Newprof from "./Newprof";
import ReactDOM from "react-dom/client";
class Prof extends Component {
    render() {
        return(
            <div>
            <Container style={{width:'5000px'}}>
                <h1 className="text-center"> Вход </h1>
                <Form>
                    <FormGroup controlId="formBasicEmail" className="mt-4">
                        <FormLabel> Your email </FormLabel>
                        <FormControl type="email" placeholder="Enter email"/>
                        <FormText>
                            Ваш email под защитой
                        </FormText>

                    </FormGroup>

                    <FormGroup controlId="formBasicPassword" className="mt-4">
                        <FormLabel> Your password </FormLabel>
                        <FormControl as="textarea" rows="1" placeholder="Enter password"/>
                    </FormGroup>
                    <CardGroup >
                        <Card>
                    <Button className="m-3 position-absolute" variant="outline-dark" type="submit" id="profil" href="/profil">
                        Войти
                    </Button></Card>
                        <Card>
                            <Button className="m-3 position-absolute" id="regist" href="/newprofil" variant="outline-dark" type="submit" >
                                Зарегистрироваться
                            </Button>
                        </Card>
                        <Card >
                            <div>
                                <Button className="m-3 label-link position-absolute top-0 light-0" id="forgot-password" href="/password" variant="outline-dark" type="submit" >
                                    Забыл пароль
                                </Button>
                            </div>
                        </Card>
                    </CardGroup>
                </Form>

            </Container>





    </div>

        );

    }
}

export default Prof;