import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const ManageBooking = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/tours")
            .then(res => res.json())
            .then(data => {
                setTours(data);
            })
    }, [])

    
    //handle Delete
    const handleDelete=(id)=>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/tours/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount){
                    alert("Deleted Successfully")
                    const remaining = tours.filter(tour => tour._id !== id);
                    setTours(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h1>Manage All Bookings {tours.length}</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    tours.map(tour => <div>

                        <Col>
                            <Card>
                                <Card.Img className="mx-auto p-2" variant="top" src={tour.img} style={{width:"150px"}} />
                                <Card.Body>
                                    <Card.Title>{tour.name}</Card.Title>
                                    <Card.Text>
                                    {tour.description}
                                    </Card.Text>
                                    <button onClick={()=>handleDelete(tour._id)} className="btn btn-danger">Delete</button>
                                </Card.Body>
                            </Card>
                        </Col>
            
            
                    </div>)
                }
            </Row>
        </div>
    );
};

export default ManageBooking;