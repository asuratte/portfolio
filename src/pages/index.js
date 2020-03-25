import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <header>
  <div class="wrapper">
  <h1>Amber Suratte</h1>
  <h2>Front-End Developer // Web Designer</h2>
</div>
</header>
<main id="work-container">
  <div class="wrapper">
  <h3>My Work</h3>
  <div class="card-container">
   {/* START Placeholder card  */}
   {/* <article class="single-card">
<a href="#">
  <div class="card-img">
    <img src="http://placekitten.com/800/600" alt="" />
  </div>
  <div class="card-info">
    <h4 class="card-title">Title Goes Here</h4>
    <p class="card-description">This is where the description goes.</p>
  </div>
</a>
</article> */}
{/* END Placeholder card  */}




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
    <li>A/B, Multivariate &amp; Split URL Testing</li>
    <li>Website Optimization</li>
    <li>Cross-Browser/Platform/Device Testing</li>
    <li>Version Control</li>
  </ul>
  </div>
</section>
<section id="about-container">
  <div class="wrapper">
  <h3>About Me</h3>
  <div class="about-para">
  <p>I'm a front-end developer, web designer, and digital marketer with over 12 years of experience. I currently work for American Hotel Register Company as a Sr. Front-End Developer. Check out <a href="https://www.linkedin.com/in/asuratte" target="_blank" rel="noopener noreferrer" title="LinkedIn">my LinkedIn profile</a> for a full list of my work experience and areas of expertise.</p>
  <p>When I’m not working, I enjoy riding bikes, watching Star Trek, baking muffins, and looking at pictures of cats on the internet. I live in Woodstock, IL with my husband, Kyle, and our cat, Sprocket.</p>
  </div>
</div>
</section>
  </Layout>
)