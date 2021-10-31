import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const ManageBooking = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch("https://still-badlands-16158.herokuapp.com/tours")
            .then(res => res.json())
            .then(data => {
                setTours(data);
            })
    }, [])

    
    //handle Delete
    const handleDelete=(id)=>{
        const proceed = window.confirm('Are you sure you want to Cancel?');
        if(proceed){
            const url = `https://still-badlands-16158.herokuapp.com/tours/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount){
                    alert("Successfully Canceled")
                    const remaining = tours.filter(tour => tour._id !== id);
                    setTours(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h1 className="my-5">MANAGE ALL BOOKINGS</h1>
        {
            tours.length===0 ? <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>  :  <Row xs={1} md={3} className="g-4">
            {
                tours.map(tour => <div key={tour._id}>

                    <Col>
                        <Card>
                            <Card.Img className="mx-auto p-2" variant="top" src={tour.img} style={{width:"150px"}} />
                            <Card.Body>
                                <Card.Title>{tour.name}</Card.Title>
                                <p className="fs-4 fw-bold text-muted"> ${tour.price}</p>
                                <button onClick={()=>handleDelete(tour._id)} className="btn btn-danger">Cancel Booking</button>
                                {/* <button onClick={()=>handleUpdate(tour._id)} className="btn btn-primary ms-2">Approve Booking</button> */}
                            </Card.Body>
                        </Card>
                    </Col>
        
        
                </div>)
            }
        </Row>
        }
        </div>
    );
};

export default ManageBooking;