import React from "react";
// import Nav from "./Nav";

// const styles = {
//     headerStyle: {
//       background: 'red',
//     },
//     headingStyle: {
//       fontSize: '100px',
//     },
//   };
// add style={styles.headerStyle} to tags to use in-component CSS, or create new CSS page, add tags and import
    
  function Header() {
    return (
      <header className="header">
        <h1>Reed Keyes</h1>
        <p>Developer, Designer, Dietitian</p>
        {/* <Nav /> */}
      </header>
    );
  }
  
  export default Header;