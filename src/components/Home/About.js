import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>

            <div className="container marketing">

                {/* <!-- Three columns of text below the carousel --> */}
                <h1 className="mt-4 mb-5">About Us</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Our Cruises</h2>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                        <p><a className="btn btn-secondary" href="/">Learn More </a></p>
                    </div>
                    <div className="col-lg-4">
                        <img src="https://image.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg" alt="" style={{height:"150px"}} />

                        <h2>Tour Agency</h2>
                        <p>TravelOnly has won Travel Agency of the Year, awarded Top Job Creator and 45th Fastest Growing Company in Canada by Profit 100 Magazine, and received the Carnival Pinnacle Award for Top Sales Globally.. A small river named Duden flows by their place and supplies</p>
                        <Link to="/contact">
                        <button className="btn btn-secondary">Contact us</button>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <h2> Nice Support </h2>
                        <p>TravelOnly prides itself in nurturing knowledgeable, dedicated, and skilled home-based travel agents through the combination of Initial training and on-going support.</p>
                        <p><a className="btn btn-secondary" href="/">Learn More</a></p>
                    </div>
                </div>
          
                </div>  

        </div>
    );
};

export default About;