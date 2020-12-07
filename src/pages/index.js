import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";


export default () => {
const data = useStaticQuery(graphql `
{
  allProjectsJson {
    edges {
      node {
        title
        slug
        descriptionShort        
        image {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
  <h3>My Work</h3>
  <div class="card-container">

{projects.map(({ node: project }) =>{
  const title = project.title;
  const descriptionShort = project.descriptionShort;
  const slug = project.slug;
  const imageData = project.image.childImageSharp.fluid;

  return (
    <ProjectPreview
    title={title}
    descriptionShort={descriptionShort}
    slug={slug}
    imageData={imageData}
    />
  )
})}


  </div>
  </div>
  </main>
<section id="skills-container">
  <div class="wrapper">
  <h3>My Skills</h3>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>Web Development</li>
    <li>Responsive Web Design</li>
    <li>Web Application Development</li>
    <li>HTML Email Development</li>
    <li>Web Content Administration</li>
    <li>Website Optimization</li>
    <li>Conversion Rate Optimization</li>
    <li>A/B, Multivariate &amp; Split URL Testing</li>
    <li>Cross-Browser/Platform/Device Testing</li>
    <li>Version Control</li>
  </ul>
  </div>
</section>
<section id="about-container">
  <div class="wrapper">
  <h3>About Me</h3>
  <div class="about-para">
  <p>I'm a front-end developer, web designer, and digital marketer with over 12 years of experience. I currently work for American Hotel Register Company as a Sr. Front-End Developer. Check out <a href="https://www.linkedin.com/in/asuratte" target="_blank" rel="noopener noreferrer" title="LinkedIn">my LinkedIn profile</a> for a full list of my work experience and areas of expertise. You can find code samples on <a href="https://github.com/asuratte" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a> and <a href="https://codepen.io/asuratte/collections/public" target="_blank" rel="noopener noreferrer" title="CodePen">CodePen.</a></p>
  <p> I'm currently pursuing a Master of Science in Applied Computer Science from the University of West Georgia. When I’m not working or studying, I enjoy riding bikes, watching Star Trek, baking muffins, and looking at pictures of cats on the internet. I live in Woodstock, IL with my husband, Kyle, and our cat, Sprocket.</p>
  </div>
</div>
</section>
  </Layout>
);
};