import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import rideDataOne from '../Data/DataOne';
import Map from '../Map/Map'

const Destination = (props) => {
    const { id } = useParams();
    const history = useHistory();
    return (
        
    <Container className="mt-5">
        <Row>
            <Col md={4}>
                <Form>
                    <Form.Group>
                        <Form.Label>Pick From</Form.Label>
                        <Form.Control type="text" placeholder="Where" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Pick From</Form.Label>
                        <Form.Control type="text" placeholder="There" />
                    </Form.Group>
                    <Form.Group controlId="selectDate">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" name="date" placeholder="Ride Time" />
                    </Form.Group>
                    <Button onClick={() => history.push(`/finalDestination/${id}`)} variant="success">
                        Search
                    </Button>
                </Form>
            </Col>
            <Col md={8}>
                <Map></Map>
            </Col>
        </Row>
    </Container>
        
    );
};

export default Destination;