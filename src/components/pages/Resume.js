import React from 'react';

export default function Resume() {
  // function to download pdf on button click
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('samplePDF.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'samplePDF.pdf';
        alink.click();
      })
    })
  }

  return (
    <main>
      <section className="resume">
        <h2>Resume</h2>
        <div>
          <div class="resume-header">
            <h5>Reed Keyes</h5>
            <p>650-400-2394</p>
            <p>rbkeyes@gmail.com</p>
          </div>
          <div class="experience">
            
          </div>
        </div>
        <div className="btnDiv">
          <button className="btn" onClick={onButtonClick}>Download</button>
        </div>
      </section>
    </main>
  );
}
