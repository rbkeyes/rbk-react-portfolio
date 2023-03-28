import React from 'react';
// components and pages
import Header from './Header';
import Footer from './Footer';

import TestNav from './TestNav'
// function to check value of currentPage (from useState)
export default function Body() {

  return (
    <>
      <TestNav />
      <Footer />
    </>
  );
}
