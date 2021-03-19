import React from 'react';
import { Container } from 'react-bootstrap';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    return (
        <Container style={{
            backgroundSize: '100% 70vh',
            textAlign: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("https://i.ibb.co/cC7rgjc/Bg.png")`

        }}>
            <Vehicle></Vehicle>
        </Container>
    );
};

export default Home;