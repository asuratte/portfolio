import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
query($slug:String!)
{
projectsJson(slug: { eq: $slug }) {
  title
  descriptionLong1
  descriptionLong2
  descriptionLong3
  descriptionShort  
  projectLink
  projectLinkText
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
    const descriptionLong1 = project.descriptionLong1;
    const descriptionLong2 = project.descriptionLong2;
    const descriptionLong3 = project.descriptionLong3;
    const descriptionShort = project.descriptionShort;
    const projectLink = project.projectLink;
    const projectLinkText = project.projectLinkText;
    const imageData = project.image.childImageSharp.fluid;

    return (
        <Layout>
            <Project 
            title={title}
            descriptionLong1={descriptionLong1}
            descriptionLong2={descriptionLong2}
            descriptionLong3={descriptionLong3}
            descriptionShort={descriptionShort}
            projectLink={projectLink}
            projectLinkText={projectLinkText}
            imageData={imageData}
            />
        </Layout>
    );
};
export default ProjectTemplate;