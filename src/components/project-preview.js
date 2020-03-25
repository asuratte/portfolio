import React from "react"

const ProjectPreview = ({ slug, imageUrl, title, description}) => (
    <article class="single-card">
    <a href={`/${slug}/`}>
      <div class="card-img">
        <img src={imageUrl} alt={title} />
      </div>
      <div class="card-info">
    <h4 class="card-title">{title}</h4>
    <p class="card-description">{description}</p>
      </div>
    </a>
    </article>
);