import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Tour = (props) => {
    const {img,name,description}=props.tour;
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
                                <button className="btn btn-danger">Book now</button>
                            </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default Tour;