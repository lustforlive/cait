import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Navbar, NavbarToggle, NavLink, Nav, TabContainer,} from "react-bootstrap";
import logo from './logo192.png';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import CarouselBox from "./Carousel.Box";
import Prof from "../Pages/Prof";
import Newprof from "../Pages/Newprof";
import ReactDOM from "react-dom/client";
import Profil from "../Pages/Profil";
class Header extends Component {
    render() {
         return(
            <div>
           <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
               <TabContainer>
                   <Navbar.Brand href="/" style={{marginLeft:"20px"}}>
                       ASS
                       <img
                           src={logo}

                           height="30"
                           width="30"
                           className="d-inline-block align-top"
                           alt="Logo"
                           />
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className="mr-avto">
                           <NavLink href="/"> Главная </NavLink>
                           <NavLink href="/about"> Фильмы </NavLink>
                           <NavLink href="/contacts"> Сериалы </NavLink>
                           <NavLink href="/blog"> Аккаунт </NavLink>
                       </Nav>
                       <Form className='d-flex mt' style={{marginLeft:"670px"}}>

                           <FormControl
                               type="text"

                               placeholder="запрос"
                               className="mr-sm-2 mt-2"/>
                           <Button variant="outline-light" className=" mt-2">поиск</Button>
                          <Nav >
                              <NavLink href="/prof" style={{marginLeft:"20px"}}>
                                  <img
                              src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                              height="30"
                              width="30"

                              alt="Logo"
                          />
                              </NavLink>
                          </Nav>
                       </Form>

                   </Navbar.Collapse>
               </TabContainer>
           </Navbar>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/prof' element={<Prof/>}/>
                <Route path='/newprofil' element={<Newprof/>}/>
            </Routes>
        </Router>
            </div>

        );
    }
}

export default Header;