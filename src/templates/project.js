import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
query($slug:String!)
{
projectsJson(slug: { eq: $slug }) {
  title
  descriptionLong
  descriptionShort  
  image {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
}
`;

const ProjectTemplate = ({ data }) => {
    const project = data.projectsJson;
    const title = project.title;
    const descriptionLong = project.descriptionLong;
    const descriptionShort = project.descriptionShort;
    const imageData = project.image.childImageSharp.fluid;

    return (
        <Layout>
            <Project 
            title={title}
            descriptionLong={descriptionLong}
            descriptionShort={descriptionShort}
            imageData={imageData}
            />
        </Layout>
    );
};
export default ProjectTemplate;