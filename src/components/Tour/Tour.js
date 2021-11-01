import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const { img, name, description, _id, price } = props.tour;
    return (
        // <div>

             <Col>
                <Card border="light">
                    <Card.Img className="mx-auto p-2" variant="top" src={img} style={{ width: "490px" }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p className="text-muted fs-4 fw-bold">${price}</p>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary">Book now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col> 
        // </div>
    );
};

export default Tour;