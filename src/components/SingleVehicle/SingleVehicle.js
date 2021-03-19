import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleVehicle = (props) => {
    const { name, strimage } = props.vec;
    return (
        <Col md={3} className="py-5">
            <Card className="text-center p-5">
                <Card.Img variant="top" src={strimage} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleVehicle;