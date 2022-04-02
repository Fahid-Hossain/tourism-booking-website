import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_1284-30189.jpg"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption className="text-white fw-bold">
                    <h3>Explore Our Travel Agency</h3>
                        <p>Best Trip Experience</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{width:"100%"}}
                        className="d-block w-100"
                        src="https://image.freepik.com/free-psd/travelling-instagram-posts-set_23-2148977648.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/water-famous-architecture-finance-shanghai-tower_1417-1120.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p className="fs-6 fw-bold">Explore Our Travel Agency</p>
                        <span className="fs-6">Best Trip Experience</span>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;