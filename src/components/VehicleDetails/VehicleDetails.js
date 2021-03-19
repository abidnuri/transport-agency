import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const VehicleDetails = () => {
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
                        <Button variant="success">Search</Button>
                    </Form>
                </Col>
                <Col md={8}>
                    <h1>Here Map</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default VehicleDetails;