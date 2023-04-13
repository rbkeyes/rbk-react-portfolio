import React from 'react';

export default function Resume() {
  // function to download pdf on button click
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('sample-resume-rbk.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'sample-resume-rbk.pdf';
        alink.click();
      })
    })
  }

  return (
    <main>
      <section className="resume">
        <h2>Resume</h2>
        <div>

          <div className="res-header mt-3">
            <h3>Reed Keyes</h3>
            <p>650-400-2394</p>
            <p>rbkeyes@gmail.com</p>
          </div>

          <div className="summary">
            <h3>Summary</h3>
            <p>Polished blurb about me</p>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            <div className="res-flex d-flex justify-content-between mt-3">
              <div className="justify-content-start">
                <h4>Student: Full Stack Web Developer</h4>
                <h4>October 2022 - present</h4>
              </div>
              <div>

              </div>
              <div className="justify-content-end">
                <ul>
                  <li>Soon to complete boot camp</li>
                  <li>Add more info here</li>
                </ul>
              </div>
            </div>
            <div className="res-flex d-flex justify-content-between mt-2">
              <div className="justify-content-start">
                <h4>Knitting Technical Editor and Knitwear Designer</h4>
                <h4>March 2019 - present</h4>
              </div>
              <div className="justify-content-end">
                <ul>
                  <li>Placeholder text</li>
                  <li>Will add more details after resume has been updated</li>
                </ul>
              </div>
            </div>

            <div className="res-flex d-flex justify-content-between mt-2">
              <div className="justify-content-start">
                <h4>Registered Dietitian</h4>
                <h4>April 2008 - August 2022</h4>
              </div>
              <div className="justify-content-end">
                <ul>
                  <li>Add some details here</li>
                  <li>More info about my experience</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="education my-3">
          <h3>Education</h3>

          <div className="res-flex d-flex justify-content-between mt-3">
            <div className="justify-content-start">
              <h4>UC Berkeley Extension</h4>
              <h4>October 2022 - April 2023</h4>
            </div>
            <div className="justify-content-end">
              <ul>
                <li>Coding boot camp</li>
              </ul>
            </div>
          </div>
          <div className="res-flex d-flex justify-content-between mt-2">
            <div className="justify-content-start">
              <h4>Learn To Tech Edit - The Tech Editor Hub</h4>
              <h4>March 2019-April 2019</h4>
            </div>
            <div className="justify-content-end mt-2">
              <ul>
                <li>Online self-paced course</li>
              </ul>
            </div>
          </div>
          <div className="res-flex d-flex justify-content-between mt-2">
            <div className="justify-content-start">
              <h4>East Carolina University</h4>
              <h4>August 2006-May 2007</h4>
            </div>
            <div className="justify-content-end">
              <ul>
                <li>Dietetic Internship</li>
              </ul>
            </div>
          </div>
          <div className="res-flex d-flex justify-content-between mt-2">
            <div className="justify-content-start">              <h4>University of California Berkeley</h4>
              <h4>2002-2006</h4>
            </div>
            <div className="justify-content-end">
              <ul>
                <li>B.S. Nutrition and Dietetics</li>
                <li>Modern Dance Minor</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btnDiv">
          <button className="btn" onClick={onButtonClick}>Download</button>
        </div>
      </section>
    </main>
  );
}
