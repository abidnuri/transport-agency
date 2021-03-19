import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleVehicle from '../SingleVehicle/SingleVehicle';

const Vehicle = () => {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        fetch(`https://api.mocki.io/v1/e5090bd7`)
            .then(res => res.json())
            .then(data => {
                setVehicle(data);
                console.log(data)
            });
    }, [])
    return (
        <div>
            <Row className="py-5 mx-auto">
                {
                    vehicle.map(vec => <SingleVehicle vec={vec}></SingleVehicle>)
                }
            </Row>
        </div>
    );
};

export default Vehicle;