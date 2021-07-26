import React from "react";
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ slug, imageData, title, descriptionShort, previewCta}) => (
    <article class="single-card">
      <Link to={`/${slug}/`}>
      <div class="card-img">
        <Image fluid={imageData} alt={title}/>
      </div>
      <div class="card-info">
    <h4 class="card-title">{title}</h4>
    <p class="card-description">{descriptionShort}</p>
    <button class="card-cta">{previewCta}</button>
    </div>
    </Link>
    </article>
);

export default ProjectPreview;