import React from 'react';

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
                        <p><a className="btn btn-secondary" href="/">عرض التفاصيل</a></p>
                    </div>
                    <div className="col-lg-4">
                        {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                        <img src="https://image.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg" alt="" style={{height:"150px"}} />

                        <h2>Tour Agency</h2>
                        <p>TravelOnly has won Travel Agency of the Year, awarded Top Job Creator and 45th Fastest Growing Company in Canada by Profit 100 Magazine, and received the Carnival Pinnacle Award for Top Sales Globally.. A small river named Duden flows by their place and supplies</p>
                        <p><a className="btn btn-secondary" href="/">عرض التفاصيل</a></p>
                    </div>
                    <div className="col-lg-4">
                        <h2> Nice Support </h2>
                        <p>TravelOnly prides itself in nurturing knowledgeable, dedicated, and skilled home-based travel agents through the combination of Initial training and on-going support.</p>
                        <p><a className="btn btn-secondary" href="/">عرض التفاصيل</a></p>
                    </div>
                </div>
          
                </div>  

        </div>
    );
};

export default About;