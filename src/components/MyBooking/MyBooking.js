import React, { useEffect, useState } from 'react';
import { Card, Row,Col, Spinner } from 'react-bootstrap';

const MyBooking = () => {
    const [bookings, setBookings] = useState([])
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
     const handleDelete=(id)=>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://still-badlands-16158.herokuapp.com/mybooking/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount){
                    alert("Successfully Canceled")
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    return (
        <div className="mt-3">
            <h1>ALL OF MY BOOKINGS ({bookings.length}) </h1>
            {
                bookings.length === 0 ?<h4 className="text-warning">We can't found Any booking Yet <Spinner animation="grow" /></h4>
            :           <Row xs={1} md={3} className="g-4">
                {
                    bookings.map(booking => <div key={booking._id}>
                        <Col>
                            <Card className="bg-white text-white fw-bold fs-4">
                                <Card.Img src={booking.mybookings.img} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="mt-5 pt-5">{booking.mybookings.name}</Card.Title>
                                    <Card.Text>
                                        ${booking.mybookings.price}
                                    </Card.Text>
                                    <button onClick={()=>handleDelete(booking._id)} className="btn btn-danger">Cancel Booking</button>
                                    {/* <button className="btn btn-primary ms-2 ">{booking.status}</button> */}
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