import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

function Project({ projects }) {
    console.log({ projects });
    return (
        <section className="container overflow-hidden">
            <div class="row row-cols-1 row-cols-md-2 g-2">
                {projects.map((project) => (
                    <div class="col">
                        <div 
                            className="card" 
                            id={project.title} 
                            key={project.title}
                            style={{ "padding": "1rem", "margin": "1.5rem" }}>
                            <img
                                className="card-img img-fluid"
                                src={window.location.origin + project.path}
                                alt='Screenshot of deployed project'
                                style={{ "height": "20rem", "object-fit": "cover", "object-position": "top" }}
                            ></img>
                            <div
                                className='card-img-overlay d-flex flex-column justify-content-end align-items-start bg-dark'
                                style={{ '--bs-bg-opacity': .75, "padding": "2rem" }}>
                                <a href={project.link} style={{"text-decoration": "none", "color": "#E7E4E8" }}>
                                    <h3 className="card-title mb-4">{project.title}</h3></a>
                                <IconContext.Provider value={{ className: "card-icon", size: "3rem" }}>
                                    <a
                                        href={project.github}
                                        alt="Link to github profile"
                                        style={{ "color": "#E7E4E8" }}><FaGithub
                                        />
                                    </a>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                )
                )
                }
            </div>
        </section>
    );
};



export default Project;