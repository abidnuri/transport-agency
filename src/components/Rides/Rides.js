import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Rides.css'

const Rides = (props) => {
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/destination/${id}`);
    }
    const { name, img, id } = props.ride;

    return (
        <Col md={3} key={id} className="pointer py-5">
            <Card onClick={() => handleBook(id)} className="point text-center p-5">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Rides;