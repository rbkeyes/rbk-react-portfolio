import React from "react";

function ProjectList({...props}) {

    return (
            <div className="mb-2">
                <div className="res-flex d-flex">
                    <h4>Craft But Not Least</h4>
                    <div className="project-links">
                        <a href={props.project.github} target='blank'>{props.project.github}</a>
                        <a href={props.project.link} target='blank'>{props.project.link}</a>
                    </div>
                </div>
                <div className="res-flex d-flex">
                    <h6>Summary</h6>
                    <p>{props.project.summary}</p>
                </div>
                <div className="res-flex d-flex">
                    <h6>Role</h6>
                    <p>{props.project.role}</p>
                </div>
                <div className="res-flex d-flex">
                    <h6>Tools</h6>
                    <p>{props.project.tools}</p>
                </div>
            </div>
    )
};