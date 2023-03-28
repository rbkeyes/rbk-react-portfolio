import { React, useState } from "react";
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/ContactForm';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // return current page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  // set state to current page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <header>
      <h1>Reed Keyes</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
      </>
   
  );
}

