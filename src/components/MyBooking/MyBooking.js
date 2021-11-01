import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageBooking = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/mybooking")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBookings(data);
            })
    }, [])
    const mybooking = bookings.filter(td => td.email === user.email);
    // console.log(mybooking);

    //handle Delete booking
    const handleDelete =(id)=>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/mybooking/${id}`;
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
        <div>
        <h1 className="my-5 text-secondary">ALL OF MY BOOKINGS </h1>
      {
          bookings.length === 0 ? <h4 className="text-muted">Did't find any bookings Yet !   <Spinner animation="grow" variant="secondary" /></h4> : <Row xs={1} md={3} className="g-4">
          {
              mybooking.map(booking => <Col key={booking._id}>
                  <Card className="bg-dark text-white">
                      <Card.Img src={booking?.mybookings?.img} alt="Card image" />
                      <Card.ImgOverlay>
                          <Card.Title className="mt-5 pt-5 fw-bold">{booking?.mybookings?.name}</Card.Title>
                          <p className="fs-3 fw-bold text-danger">
                         ${booking?.mybookings?.price}
                          </p>
                          <button onClick={()=>handleDelete(booking._id)} className="btn btn-warning text-danger fw-bold">Cancel Booking</button>
                          <button className="btn btn-warning text-primary fw-bold ms-2">{booking.status.status}</button>
                      </Card.ImgOverlay>
                  </Card>
              </Col>

              )
          }
      </Row>
      }

        </div>
    );
};

export default ManageBooking;