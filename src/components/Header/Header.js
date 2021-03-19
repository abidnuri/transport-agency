import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg" className="sticky-top">
                <Navbar.Brand as={Link} to="/home" className="font-weight-bold">Transport Agency</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home" className="px-3">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination" className="px-3">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className="px-3">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="px-3">Contact</Nav.Link>
                        <Button as={Link} to="/login" variant="success" className="px-3">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;