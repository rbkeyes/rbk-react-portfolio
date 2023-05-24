import React from 'react';
import Project from '../projects/Project';

import projects from '../dataObjects/projects';

function Portfolio() {
 return(
  <main className="card-deck portfolio">
    <h2>My Work</h2>
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-1">
    {projects.map((project) => 
    <Project key={project.title} project={project} />
    )
    }
    </div>
  </main>
 )
};

export default Portfolio;

