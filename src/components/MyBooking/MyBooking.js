import React, { useEffect, useState } from 'react';
import { Card, Row,Col } from 'react-bootstrap';

const MyBooking = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/mybooking")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBookings(data);
            })
        console.log(bookings);
    }, [])

     //handle Delete
     const handleDelete=(id)=>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/mybooking/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount){
                    alert("Deleted Successfully")
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h1>My Bookings {bookings.length}</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    bookings.map(booking => <div>
                        <Col>
                            <Card className="bg-white text-white fw-bold fs-4">
                                <Card.Img src={booking.mybookings.img} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="mt-5 pt-5">{booking.mybookings.name}</Card.Title>
                                    <Card.Text>
                                        {booking.mybookings.description}
                                    </Card.Text>
                                    <button onClick={()=>handleDelete(booking._id)} className="btn btn-primary">Delete</button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                    </div>)
                }
            </Row>
        </div>
    );
};

export default MyBooking;