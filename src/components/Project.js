import React from "react";
import './Project.css';
import ProjectButton from "./ProjectButton";

export default function Project({name, description, icon, technology, link}) {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className={'project_layout'}>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h3>
                {icon && <span className="project_icon">{icon} </span>}
                {technology}
            </h3>
            <ProjectButton onClick={handleClick}/>
        </div>
    );
};