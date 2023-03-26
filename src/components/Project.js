import React from "react";

function Project({projects}) {
    console.log({projects});
    return (
        <section className="container">
            {projects.map((project) => (
                    <div className="card" id={project.title} key={project.title}>
                        <img
                            src={window.location.origin + project.path}
                            className="card-img-top"
                            alt={project.alt}
                        ></img>
                        <h5 className="card-title">{`${project.title}`}</h5>
                    </div>
            )
            )
        }
        </section>
    );
};



export default Project;