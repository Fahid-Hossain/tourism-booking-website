import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours,setTours]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/tours")
        .then(res=>res.json())
        .then(data=>setTours(data))
    },[])
    return (
        <div>
            <h1>Your tours {tours.length}</h1>
            <Row xs={1} md={3} className="g-4">
            {
                tours.map(tour => <Tour tour={tour} key={tour._id}></Tour>)
            }
              </Row>
        </div>
    );
};

export default Tours;