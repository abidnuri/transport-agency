import React, { useEffect, useState } from 'react';
import rideDataTwo from '../Data/DataTwo';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Map from '../Map/Map'

const FinalDestination = () => {
  const { id } = useParams();

  const vehicle = rideDataTwo.find(ride => ride.id == id);
  console.log(vehicle);
  const { name, quantity, img, price } = vehicle;
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4} className="text-white text-center bg-dark">
          <Row>
            <Col md="6">
              <div className="bg-primary p-3">
                <h5>Dhaka</h5>
                <h5 className="text-danger">To</h5>
                <h5>Saidpur</h5>
              </div>
              <p>Ride Type: {name}</p>
              <p>Quantity: {quantity}</p>
              <p>Ticket Price: {price}</p>
            </Col>
            <Col md="6">
              <img className="img-fluid" src={img} alt="" />
            </Col>
            <Col md="6">
              <div className="bg-primary p-3">
                <h5>Dhaka</h5>
                <h5 className="text-danger">To</h5>
                <h5>Saidpur</h5>
              </div>
              <p>Ride Type: {name}</p>
              <p>Quantity: {quantity}</p>
              <p>Ticket Price: {price}</p>
            </Col>
            <Col md="6">
              <img className="img-fluid" src={img} alt="" />
            </Col>
            <Col md="6">
              <div className="bg-primary p-3">
                <h5>Dhaka</h5>
                <h5 className="text-danger">To</h5>
                <h5>Saidpur</h5>
              </div>
              <p>Ride Type: {name}</p>
              <p>Quantity: {quantity}</p>
              <p>Ticket Price: {price}</p>
            </Col>
            <Col md="6">
              <img className="img-fluid" src={img} alt="" />
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          <Map></Map>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalDestination;