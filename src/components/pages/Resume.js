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
            <p>Motivated and detail-oriented full-stack web developer with experience in dietetics and nutrition counseling. Received certificate from coding boot camp at UC Berkeley. Skilled in front-end and backend web development with a commitment to building accessible and responsive web applications. Strong cross-team communication, collaboration, and creative problem solving skills.</p>
          </div>

          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="res-flex d-flex justify-content-between">
              <div className="mb-2">
                <h4>Languages</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JSX</li>
                </ul>
              </div>
              <div className="mb-2">
                <h4>Databases</h4>
                <ul>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="mb-2">
                <h4>Frameworks and Libraries</h4>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="mb-2">
                <h4>Tools and Technology</h4>
                <ul>
                  <li>Git</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Mongo Atlas</li>
                  <li>Apollo Server</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="projects">
            <h3>Projects</h3>
            <div className="mb-2">
              <div className="res-flex d-flex">
                <h4>Craft But Not Least</h4>
                <div>
                  <a href="https://github.com/rbkeyes/craft-but-not-least" target='blank'>github.com/rbkeyes/craft-but-not-least</a>
                  <a href='https://craft-but-not-least.herokuapp.com/' target='blank'>craft-but-not-least.herokuapp.com/</a>
                </div>
              </div>
              <div className="res-flex d-flex">
                <h6>Summary</h6>
                <p>A full-stack web application for users to buy, sell, or trade secondhand craft supplies</p>
              </div>
              <div className="res-flex d-flex">
                <h6>Role</h6>
                <p>Project Manager, debugging, deployment</p>
              </div>
              <div className="res-flex d-flex">
                <h6>Tools</h6>
                <p>HTML, CSS, JavaScript, Handlebars, Express, mySQL, sequelize, bcrypt</p>
              </div>
            </div>
            <div>
              <div className="res-flex d-flex">
                <h4>Blog About It</h4>
                <div>
                  <a href="https://github.com/rbkeyes/blog-about-it" target='blank'>github.com/rbkeyes/blog-about-it</a>
                  <a href='https://blog-about-it.herokuapp.com/login' target='blank'>blog-about-it.herokuapp.com/login</a>
                </div>
              </div>
              <div className="res-flex d-flex">
                <h6>Summary</h6>
                <p>A simple CMS style blog site with user login and</p>
              </div>
              <div className="res-flex d-flex">
                <h6>Role</h6>
                <p>Project Manager, debugging, deployment</p>
              </div>
              <div className="res-flex d-flex">
                <h6>Tools</h6>
                <p>HTML, CSS, JavaScript, Handlebars, Express, mySQL, sequelize, bcrypt</p>
              </div>
            </div>
          </div>

          <div className="projects">
            <h3>Experience</h3>
          </div>

          <div className="education">
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
              <div className="justify-content-start">
                <h4>University of California Berkeley</h4>
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
        </div>
      </section>
    </main>
  );
}
