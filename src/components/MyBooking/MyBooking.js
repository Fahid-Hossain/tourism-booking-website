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
                                    <button className="btn btn-primary">Delete</button>
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