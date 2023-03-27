import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

function Project( {...props} ) {

    const [onHover, setHover] = useState(false);

    return (
        <div className="col">
            <div
                className="card"
                key={props.project.title}
                onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}
                style={{ "padding": "1rem", "margin": "2rem" }}>
                <img
                    className="card-img img-fluid"
                    src={window.location.origin + props.project.path}
                    alt='Screenshot of deployed project'
                    style={{ "max-height": "30rem", "objectFit": "cover", "objectPosition": "top" }}
                ></img>
                {onHover &&
                    <div
                        className='card-img-overlay d-flex flex-column justify-content-end align-items-start bg-dark'
                        style={{ '--bs-bg-opacity': .75, "padding": "2rem" }}>
                        <a href={props.project.link} style={{ "textDecoration": "none", "color": "#E7E4E8" }}>
                            <h3 className="card-title mb-4">{props.project.title}</h3></a>
                        <IconContext.Provider value={{ className: "card-icon", size: "3rem" }}>
                            <a
                                href={props.project.github}
                                alt="Link to github profile"
                                style={{ "color": "#E7E4E8" }}><FaGithub
                                />
                            </a>
                        </IconContext.Provider>
                    </div>
                }
            </div>
        </div>
    );
};

export default Project;
