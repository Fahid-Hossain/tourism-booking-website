import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import "./Booking.css"
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { id } = useParams();
    //
    const {user}=useAuth();
    //load single data
    const [tour, setTour] = useState({})
    //
    const {img,name,description} =tour;

    useEffect(() => {
        fetch(`https://still-badlands-16158.herokuapp.com/tours/${id}`)
            .then(res => res.json())
            .then(data => {
                setTour(data);
            })
    },[])

    // react hook form
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        // console.log(data);
        data.mybookings =tour;
        data.status = {
            status:"pending"
        };

        fetch("https://still-badlands-16158.herokuapp.com/mybooking",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result=>{
            console.log(result);
            if(result.insertedId){
                alert("Your booking successfully Done")
            }
        })

    };
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img}/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                  <div className="booking-form">
                      <h3 className="text-primary fw-bold pt-5">BOOKING RIGHT NOW</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")}  value={user.displayName || ""} />
                        <input {...register("email")} value={user.email || ""} />
                        <input {...register("city")} placeholder="city" />
                        <input {...register("road")} placeholder="Road no" />
                        <input {...register("phone")} placeholder="Phone no" />
                        <input type="submit" value="Book now"/>
                    </form>
                  </div>
                </Col>
            </Row>

        </div>
    );
};

export default Booking;