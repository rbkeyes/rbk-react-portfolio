import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

function Project( {...props} ) {

    const styles = {
        card: {
            "padding": "1rem",
            "margin": "1rem",
            "backgroundColor": "#e6e7e8"
        },
        link: { 
            "color": "#e6e7e8"
        }
        
    }

    const [onHover, setHover] = useState(false);

    return (
        <div className="col">
            <div
                className="card"
                key={props.project.title}
                onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}
                style={styles.card}>
                <img
                    className="card-img img-fluid"
                    src={window.location.origin + props.project.path}
                    alt='Screenshot of deployed project'
                ></img>
                {onHover &&
                    <div
                        className='card-img-overlay d-flex flex-column justify-content-end align-items-start bg-dark'
                        style={{ '--bs-bg-opacity': .75, "padding": "2rem" }}>
                            <div className='mb-5 mr-2'>
                        <a className='link-light' href={props.project.link}>
                            <h3 className="card-title mb-4">{props.project.title}</h3></a>
                        <IconContext.Provider value={{ className: "card-icon", size: "3rem" }}>
                            <a
                                className='link-light'
                                href={props.project.github}
                                alt="Link to github profile"
                                ><FaGithub
                                />
                            </a>
                        </IconContext.Provider>
                        </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Project;
