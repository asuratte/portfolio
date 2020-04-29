import React from "react";
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Project = ({ imageData, title, descriptionLong1, descriptionLong2, descriptionLong3, descriptionShort, projectLink, projectLinkText}) => (
    <div class="project-wrapper">
        <h3>
            {title}
        </h3>
        <p class="project-description">{descriptionShort}</p>
        <Image fluid={imageData} alt={title}/>
        <p class="project-description">{descriptionLong1}</p>
        <p class="project-description">{descriptionLong2}</p>
        <p class="project-description">{descriptionLong3}</p>
        <a href={projectLink} class="project-link" target="_blank" rel="noopener noreferrer">{projectLinkText}</a>
        <p>
            <Link to="/" class="back-main">Back to main page</Link>
        </p>
    </div>
    
);

export default Project;