import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bd-footer mt-5 bg-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
                                <span className="fs-5">Travel-Rhythm</span>
                            </a>
                            <ul className="list-unstyled small text-muted">
                                <li className="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.1/about/team/">TravelRhythm team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
                                <li className="mb-2">Code licensed <a href="/">MIT</a>, docs <a href="/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                                <li className="mb-2">Currently v5.1.3.</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                            <h5>Blog Post</h5>
                            <p className="text-muted">The Ultimate Packing List For Female Travelers</p>
                            <p className="text-muted">How These 5 People Found The Path to Their Dream Trip</p>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5>Book Now</h5>
                            <p className="text-muted">Flight</p>
                            <p className="text-muted">Hotels</p>
                            <p className="text-muted">Tour</p>
                            <p className="text-muted">Car Rent</p>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5>Top Deals</h5>
                            <p className="text-muted">Edina Hoted</p>
                            <p className="text-muted">Quality Sitles</p>
                            <p className="text-muted">Hotel Epikk</p>
                            <p className="text-muted">Do Vinci Villa</p>
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <h5>Contact Information</h5>
                            <p className="text-muted">
                                291 South 21th Street,
                            </p>
                            <p className="text-muted">Suile 721 New York NY 10016</p>
                            <p className="text-muted"> + 1235 2455 98</p>
                            <p className="text-muted">info@traveler.com</p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="bg-dark text-white py-3 text-muted"> &copy; All right reserved by travel-Rhythm Agency_2021</footer>
        </div>
    );
};

export default Footer;