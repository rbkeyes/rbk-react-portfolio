import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PageNav({ currentPage, handlePageChange }) {
  return (
    <Navbar variant="dark" className="format-nav my-0 py-0" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#about">
          <h1>Reed Keyes</h1>
          </Navbar.Brand>
          <Nav className="underline">
            <Nav.Link
              href='#about'
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >About
            </Nav.Link>
            <Nav.Link
              href='#portfolio'
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >Portfolio
            </Nav.Link>
            <Nav.Link
              href='#resume'
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume
            </Nav.Link>
            <Nav.Link
              href='#contact'
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
            >Contact Me
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default PageNav;