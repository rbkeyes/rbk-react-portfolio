import { React, useState } from 'react';
// components and pages
import Header from './Header'
import Nav from './Nav';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


// function to check value of currentPage (from useState)
function Body() {
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
      <Header />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer />
    </>
  );
}


export default Body;
