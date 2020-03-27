import React from "react"
import { Helmet } from "react-helmet"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
      <Helmet>
<meta charSet="utf-8" />
<title>Amber Suratte</title>
</Helmet>
</div>
    )
  }
}
export default ({ children }) => (

  <div class="site-wrapper">
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
  <h2>Front-End Developer // Web Designer</h2>
</div>
</header>
    {children}
    </div>
<footer>
  <div class="wrapper">
    <p>&copy; 2020 Amber Suratte</p>
<p>
  <a href="https://www.linkedin.com/in/asuratte/" target="_blank" rel="noopener noreferrer" class="social-links" title="LinkedIn"><span class="fab fa-linkedin"></span></a>
  <a href="https://github.com/asuratte" target="_blank" rel="noopener noreferrer" class="social-links" title="Github"><span class="fab fa-github"></span></a>
  <a href="https://codepen.io/asuratte/collections/public" target="_blank" rel="noopener noreferrer" class="social-links" title="Codepen"><span class="fab fa-codepen"></span></a>
  <a href="https://www.instagram.com/amber.suratte/" target="_blank" rel="noopener noreferrer" class="social-links" title="Instagram"><span class="fab fa-instagram"></span></a>
  <a href="https://www.strava.com/athletes/7856720" target="_blank" rel="noopener noreferrer" class="social-links"  title="Strava"><span class="fab fa-strava"></span></a>
  </p>
</div>
</footer>
  </div>
  
)