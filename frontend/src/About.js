import React from 'react';
import { Route, Link } from 'react-router-dom';
import './About.css';
import gear from './gear.svg';
import gear2 from './gear2.svg';

const aboutHeader = (
  <div className="About-Header">

    <div className="gears">
      <div className="gear">
        <img src={gear} alt="gear"/>
      </div>
      <div className="gear2">
        <img src={gear2} alt="gear"/>
      </div>
      <div className="gear3">
        <img src={gear} alt="gear"/>
      </div>
      <div className="gear4">
        <img src={gear2} alt="gear"/>
      </div>
    </div>

    <div className="gridlines-box">
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div classNameName="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>

    </div>

    <div className="overlay">
      <Link to="/"><h1 className="title">SQUEZ Site Designs</h1></Link>
    </div>

  </div>
);

const aboutContent = () => (

  <div className="about-site" id="about-start">

    {aboutHeader}

    <div className="about-content">

      <h3>About this website</h3>

      This site was built using Node, Express, MongoDB, Mongoose, and React.<br /><br />

      Although the final version of this website does not use any CSS frameworks, I started drafting it using Yahoo's <a href="http://purecss.io">Pure CSS</a>.<br /><br />
      It currently uses plain vanilla CSS with no preprocessors - CSS grids and React make it possible to achieve maintanable code and it is somewhat rewarding to not have to rely on bootstrap or jQuery to create UI's.

      <h3>About Me</h3>
      Hello!  My name is <span className="courier">markVelasquez.</span><br /><br />

      I am a frontend web developer based in Southern California, USA.<br /><br />

      I develop web products in HTML5, CSS3, Javascript, React, Express, and Node.js.<br /><br />

      I have experience in a handful of languages and frameworks to include Python, jQuery, Angular, Django, SciPy/MatPlotLib, and C++.<br /><br />

      Reach me anytime at <a href="mailto:iamsquez@gmail.com">iamsquez@gmail.com</a> or visit me on <a href="http://github.com/squezm">GitHub</a>.<br /><br />

      I look forward to working with you and am always open to collaboration!<br /><br />

    </div>

  </div>
  )

const About = () => (
    <div className="about">
      <Route path="/about" component={aboutContent}/>
    </div>

  );

export default About;
