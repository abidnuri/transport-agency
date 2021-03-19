import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                // console.log(signedInUser);
                setLoggedInUser(signedInUser);

                history.replace(from);
                
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Row className="justify-content-center">
                        <Col md={12} className="p-4">
                            <h2>Create an Account</h2>
                            <Form className="text-center">
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="User Name or Email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Button variant="danger" size="md" block>
                                    Create Your Account
                                </Button>
                                <p className="text-center py-2">Already have an account? <a href="">Login</a></p>
                                <p className="text-center">or</p>
                                <Button variant="success" size="sm" className="mb-2">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    Login With Facebook
                                </Button> <br />
                                <Button onClick={handleGoogleSignIn} variant="success" size="sm" >
                                    <FontAwesomeIcon icon={faGoogle} />
                                    Login With Google
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;