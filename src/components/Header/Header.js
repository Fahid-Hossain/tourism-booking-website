import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/home">Home</Link>
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/about">About</Link>
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="/tours">Tours</Link>
                            <Link className="mx-2 text-decoration-none text-white nav-link" to="contact">Contact</Link>
                        </Nav>
                        <Nav>
                         {
                             !user.email ? <Link className="mx-2 text-decoration-none text-white nav-link" to="/signin">
                             <button className="btn btn-secondary">Sign In</button>
                         </Link> : <Link className="mx-2 text-decoration-none text-white nav-link" to="/signin">
                             <button onClick={logOut} className="btn btn-secondary">Log Out</button>
                         </Link> 
                         }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;