import React from 'react';
import { Route } from 'react-router-dom';
import './about.css';

/*(<h3>CSS - make a nasty grid</h3>
<ul>
  <li className="css">The header and mobile version of the navigation menu use CSS Flexbox.</li>
  <li className="css">The comments section uses CSS grids and grid-template-areas.</li>
  <li className="css">@media queries were used to set responsive breakpoints for different-sized screens and mobile devices.</li>
  <li className="css">React developer tools was used to simulate different-sized screens.</li>
</ul>)*/
const aboutContent = () => (
  <div className="aboutSite" id="about-start">

    <h3>About this website</h3>

    This site was built using Node, Express, MongoDB, Mongoose, and React.<br /><br />

    Although the final version of this website does not use any CSS frameworks, I started drafting it using Yahoo's <a href="http://purecss.io">Pure CSS</a>.<br /><br />
    It currently uses plain vanilla CSS with no preprocessors - CSS grids and React make it possible to achieve maintanable code and it is somewhat rewarding to not have to rely on bootstrap or jQuery to create UI's.

    <h3>About Me</h3>
    Hello!  My name is <span className="courier">markVelasquez.</span><br /><br />

    I am a frontend web developer based in Southern California, USA.<br /><br />

    I develop web products in HTML5, CSS3, Javascript, React, Express, and Node.js.<br /><br />

    I have experience in a handful of languages and frameworks to include Python, jQuery, Angular, Django, SciPy/MatPlotLib, and C++.<br /><br />

    Reach me anytime at <a href="mailto:iamsquez@gmail.com">iamsquez@gmail.com</a>.  I look forward to working with you and am always open to collaboration.<br /><br />

  </div>
  )

const About = () => (
    <div className="about">
      <Route path="/about" component={aboutContent}/>
    </div>

  );

export default About;
