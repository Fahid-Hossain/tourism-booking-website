import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';

const MyBooking = () => {
    const [bookings, setBookings] = useState([])
    // const [isDisabled, setDisabled] = useState(false);

    useEffect(() => {
        fetch("https://still-badlands-16158.herokuapp.com/mybooking")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBookings(data);
            })
        console.log(bookings);
    }, [])

    //handle Delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://still-badlands-16158.herokuapp.com/mybooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert("Successfully Canceled")
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    //
    const updated = {
        status: 'Approved'
    };


    //handle update bookings
    const handleUpdate = (id) => {
        const url = `https://still-badlands-16158.herokuapp.com/mybooking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setDisabled(true);
                alert("Your booking successfully Approved.Check in mybooking Option.")
            })
    }

    return (
        <div className="mt-3">
            <h1 className="text-secondary">TOTAL BOOKINGS ({bookings.length})</h1>
            {
                bookings.length === 0 ? <Spinner animation="border" variant="secondary" />
                    : <Row xs={1} md={3} className="g-0">
                        {
                            bookings.map(booking => <div key={booking._id}>
                                <Col>
                                    <Card className="bg-white text-white fw-bold fs-4">
                                        <Card.Img src={booking?.mybookings?.img} alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title className="pt-0">{booking?.mybookings?.name}</Card.Title>
                                            <p>By {booking?.name}</p>
                                            <span>{booking?.road}</span>
                                            <span className="ms-3">{booking?.city}</span>
                                            <Card.Text>
                                                ${booking?.mybookings?.price}
                                            </Card.Text>
                                            <button onClick={() => handleDelete(booking._id)} className="btn btn-danger">Cancel Booking</button>
                                            <button onClick={()=>handleUpdate(booking._id)} className="btn btn-primary ms-2">Approve</button>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>

                            </div>)
                        }
                    </Row>
            }
        </div>
    );
};

export default MyBooking;