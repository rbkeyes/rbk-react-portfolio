import React from 'react';

import headshot from '../../images/headshot.jpg'

export default function About() {
  return (
    <main className='about d-flex justify-content-between'>
      <div className='about-body me-5'>
      <h2>Developer</h2>
      <p>
        I am a creative and detail-oriented full-stack web developer located in the Bay Area. I earned my certificate in full-stack web development at U.C. Berkeley. I look forward to using my newly-acquired skills to build beautiful, functional, and accessible websites and applications. 
      </p>
      <h2>Designer</h2>
      <p>
        I am a lifelong knitter with two published patterns and loads of ideas. As a knitwear designer and technical editor, I am frequently exercising my problem-solving skills and testing possible solutions, qualities that have proven beneficial in my work as a developer. I view setbacks as puzzles to be solved, and there is no greater feeling than finding a particularly elegant solution to an issue.
      </p>
      <h2>Dietitian</h2>
      <p>
        I left my career as a registered dietitian to pursue a career as a web developer. My primary responsibility as a dietitian was to meet each patient where they were, and work with them to develop plans for their care that were achievable and maintainable. I also worked closely with a team of nurses, physicians, patient care technicians, and administrators to ensure that all providers were working together to achieve a common goal. 
      </p>
      </div>
      <div className='headshot'>
        <img 
        src={headshot} alt="headshot" 
        style={{width: "250px", height: "250px", objectFit: "cover", borderRadius: "50%", border: "solid 3px var(--accent)"}}/>
      </div>
    </main>
  );
}