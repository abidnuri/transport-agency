import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, SignInUserWithEmailAndPassword, googleSignIn, initializeSignIn, updateUserInfo } from './ManageLogin';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
    initializeSignIn();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        userName: '',
        email: '',
        password: '',
        imgSrc: '',
        error: '',
        success: false
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res)
        if (redirect) {
            history.replace(from);
        }
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const handleSubmit = (event) => {
        if (newUser && user.name && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                    updateUserInfo(user.name);
                })
        }
        if (!newUser && user.email && user.password) {
            SignInUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                    setLoggedInUser(res);
                })
        }
        event.preventDefault();
    }

    const handleBlur = (event) => {
        let isFormValid;

        if (event.target.name === 'name') {
            isFormValid = event.target.value.length > 4;
        }

        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }

        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && isPasswordHasNumber;
        }

        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
        
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Row className="justify-content-center">
                        <Col md={12} className="p-4">
                            <Form onSubmit={handleSubmit} className="text-center">

                                <h1>{newUser ? 'Create an account' : 'Signin'}</h1>
                                {
                                    newUser &&
                                    <>
                                        <Form.Group controlId="formBasicName">
                                            <input onBlur={handleBlur} className="form-control" type="text" placeholder="User Name Must Be 4 Character" required />
                                        </Form.Group>
                                    </>
                                }
                                <Form.Group controlId="formBasicEmail">
                                    <input onBlur={handleBlur} className="form-control" type="email" placeholder="Email: Ex:example@mail.com" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <input className="form-control" type="password" placeholder="Minimum 6 Char with numbers" />
                                </Form.Group>
                                <Button variant="danger" size="md" block type="submit">{newUser ? 'Create an account' : 'Signin'}</Button>
                                <p>
                                    {newUser ? 'Already have an account' : 'Don’t have an account'} ?
                                    <span onClick={() => setNewUser(!newUser)} style={{cursor: 'pointer'}} className="text-danger">
                                        {newUser ? ' Signin' : ' Create an account'}
                                    </span>
                                </p>
                                <Button onClick={handleGoogleSignIn} variant="success" size="sm" >
                                    <FontAwesomeIcon icon={faGoogle} />
                                    Login With Google
                                </Button>
                            </Form>
                            <p style={{ color: 'red' }}>{user.error}</p>
                            {
                                user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;