import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5">
            <img src="https://image.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg" alt="" />
            <Link to="/home">
            <button className="btn btn-warning fw-bold text-muted">Go Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;