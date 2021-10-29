import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const {img,name,description,_id}=props.tour;
    return (
        <div>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                             <Link to={`/booking/${_id}`}>
                             <button className="btn btn-danger">Book now</button>
                             </Link>
                            </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default Tour;