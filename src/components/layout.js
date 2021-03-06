import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div class="site-wrapper">
      <Helmet>
  <meta charSet="utf-8" />
  <title>Amber Suratte | Portfolio</title>
  <meta name="title" content="Amber Suratte | Portfolio" />
  <meta name="description" content="Amber Suratte's Web Design and Development Portfolio" />
  </Helmet>
    <nav>
    <ul class="wrapper">
      <li><a href="/#work-container">My Work</a></li>
      <li><a href="/#skills-container">My Skills</a></li>
      <li><a href="/#about-container">About Me</a></li>
    </ul>
  </nav>
  <div className="body-wrapper">
  <header>
  <div class="wrapper">
  <h1>Amber Suratte</h1>
  <h2>Front-End Web Developer</h2>
</div>
</header>
    {children}
    </div>
<footer>
  <div class="wrapper">
    <p> &copy; {new Date().getFullYear()}{" "} Amber Suratte
    </p>
<p>
  <a href="https://www.linkedin.com/in/asuratte/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="social-links" title="Amber Suratte on LinkedIn"><span class="fab fa-linkedin"></span></a>
  <a href="https://github.com/asuratte" aria-label="GitHub" target="_blank" rel="noopener noreferrer" class="social-links" title="Amber Suratte on Github"><span class="fab fa-github"></span></a>
  <a href="https://codepen.io/asuratte/collections/public" aria-label="Codepen" target="_blank" rel="noopener noreferrer" class="social-links" title="Amber Suratte on Codepen"><span class="fab fa-codepen"></span></a>
  <a href="https://www.instagram.com/amber.suratte/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" class="social-links" title="Amber Suratte on Instagram"><span class="fab fa-instagram"></span></a>
  </p>
</div>
</footer>
  </div>
  
)