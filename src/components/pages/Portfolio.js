import React from 'react';
import Project from '../Project';

// projects object
import projects from '../projects';

function Portfolio() {
 return(
  <section className="card-deck portfolio">
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-1">
    {projects.map((project) => 
    <Project project={project} />
    )
    }
    </div>
  </section>
 )
};

export default Portfolio;

