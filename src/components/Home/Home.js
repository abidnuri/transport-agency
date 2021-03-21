import React from 'react';
import { useState } from 'react';
import Rides from '../Rides/Rides'
import rideDataOne from '../Data/DataOne'
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';


const Home = () => {
    const [travel, setTravel] = useState([]);
    useEffect(() => {
        setTravel(rideDataOne);
    }, [])
    return (
        <Container style={{
            backgroundSize: '100% 60vh',
            textAlign: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("https://i.ibb.co/cC7rgjc/Bg.png")`
        }}>
            <Row className="banner">
                {
                    travel.map(ride => <Rides key={ride.id} ride={ride}></Rides>)
                }
            </Row>
        </Container>
    );
};

export default Home;