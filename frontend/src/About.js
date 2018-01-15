import React from 'react';
import { Route } from 'react-router-dom';
import './about.css';

const aboutContent = () => (
  <div className="aboutSite">
    Hello!  My name is <courier>markVelasquez.</courier><br /><br />

    I am a frontend web developer based in Southern California, USA.<br /><br />

    I develop web products in HTML5, CSS3, Javascript, React, Express, and Node.js.<br /><br />

    I have experience in a handful of languages and frameworks to include jQuery Django, Python, SciPy, Angular, and C++<br /><br />

    Reach me anytime at <a href="mailto:iamsquez@gmail.com">iamsquez@gmail.com</a>.  I look forward to working with you and am always open to collaboration.<br /><br />

    This site was built using Node, Express, MongoDB, Mongoose, React and React Router DOM.
    </div>
  )

const About = () => (
    <div className="about">
      <Route path="/about" component={aboutContent}/>
    </div>

  );

export default About;
