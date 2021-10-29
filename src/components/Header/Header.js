import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand><h5 className="text-bold text-warning fs-4 ms-5">Travel Rhythm</h5></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/home">Home</Link>
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/about">About</Link>
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/tours">Tours</Link>
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/contact">Contact</Link>

                            
                        {
                            user.email &&      <>
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/mybooking">My_Booking</Link>
                                <Link className="mx-2 text-decoration-none text-white nav-link" to="/managebooking">Manage_Booking</Link>
                                <Link className="mx-2 text-decoration-none text-white nav-link" to="/addtrip">Add_a_trip</Link>
                            </>
                        }
                            
                        </Nav>
                        <Nav>
                          {
                              user.email &&  <Link to="">
                              <img style={{width:"40px",height:"40px"}} className="rounded-pill mt-2 me-2" src={user.photoURL} alt="" />
                              </Link>
                          }
                        
                           <p className="text-white mt-3">{user?.displayName}</p>
                           
                           
                         {
                             !user.email ? <Link className="mx-2 text-decoration-none text-white nav-link" to="/signin">
                             <button className="btn btn-secondary me-5">Sign In</button>
                         </Link> : <Link className="mx-2 text-decoration-none text-white nav-link" to="/signin">
                             <button onClick={logOut} className="btn btn-secondary me-5">Log Out</button>
                         </Link> 
                         }
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;