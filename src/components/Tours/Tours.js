import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours,setTours]=useState([]);

    useEffect(()=>{
        fetch("https://still-badlands-16158.herokuapp.com/tours")
        .then(res=>res.json())
        .then(data=>setTours(data))
    },[])
    return (
        <div>
                  <h1 className="mt-5">Popular Destination</h1>
                  <hr className="featurette-divider" />
                <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <hr className="featurette-divider" />
            <Row xs={1} md={3} className="g-4">
            {
                tours.map(tour => <Tour tour={tour} key={tour._id}></Tour>)
            }
              </Row>
        </div>
    );
};

export default Tours;