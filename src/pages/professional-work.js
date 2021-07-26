import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";


export default () => {
const data = useStaticQuery(graphql `
{
  allProjectsJson ( filter: { projectType:  { eq: "professional"} }) {
    edges {
      node {
        title
        slug
        descriptionShort   
        previewCta     
        image {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featured
        projectType
      }
    }
  }
}
`);

const projects = data.allProjectsJson.edges;

return (
  <Layout>
<main id="work-container">
  <div class="wrapper">
  <h3>Professional Work</h3>
  <div class="card-container">

  {projects.map(({ node: project }) =>{
  const title = project.title;
  const descriptionShort = project.descriptionShort;
  const slug = project.slug;
  const imageData = project.image.childImageSharp.fluid;
  const previewCta = project.previewCta;

  return (
    <ProjectPreview
    title={title}
    descriptionShort={descriptionShort}
    slug={slug}
    imageData={imageData}
    previewCta={previewCta}
    />
  )
})}


  </div>
  </div>
  </main>
  </Layout>
);
};