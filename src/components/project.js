import React from "react";
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Project = ({ imageData, title, descriptionLong, descriptionShort}) => (
    <div class="project-wrapper">
        <h3>
            {title}
        </h3>
        <p class="project-description">{descriptionShort}</p>
        <Image fluid={imageData} alt={title}/>
        <p class="project-description">{descriptionLong}</p>

        <p>
            <Link to="/" class="back-main">Back to main page</Link>
        </p>
    </div>
);

export default Project;