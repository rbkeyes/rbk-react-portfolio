import React from 'react';
import Project from '../Project';


// projects object
import projects from '../projects';

function Portfolio() {
 return(
  <section className="card-deck portfolio">
    <Project projects={projects} />
  </section>
 )
};

export default Portfolio;

