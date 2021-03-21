import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    return (
        <Container>
            <Navbar bg="light" expand="lg" className="sticky-top">
                <Navbar.Brand as={Link} to="/home" className="font-weight-bold">Transport Agency</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/signin">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Button as={Link} to="/signin" variant="success" className="px-3">
                            {loggedinUser.email ? loggedinUser.email : "Login"}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;