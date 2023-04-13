import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";




function Project( {...props} ) {

    const [onHover, setHover] = useState(false);

    return (
        <div className="col">
            <div
                className="card"
                
                onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}
                >
                <img
                    className="card-img img-fluid"
                    src={props.project.path}
                    alt='Screenshot of deployed project'
                ></img>
                {onHover &&
                    <div
                        className='card-img-overlay d-flex flex-column justify-content-end align-items-start'>
                            <div className='mb-5 mr-2'>
                        <a className='card-link' href={props.project.link}>
                            <h3 className="card-title mb-4">{props.project.title}</h3></a>
                        <IconContext.Provider value={{ className: "card-icon", size: "3rem" }}>
                            <a
                                className='card-link'
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
