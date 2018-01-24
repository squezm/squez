import React from 'react';
import { Route, Link } from 'react-router-dom';
import './about.css';
import gear from './gear.svg';
import gear2 from './gear2.svg';

const aboutHeader = (
  <div className="about-header">

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
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
      <div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div><div className="grid-box"></div>
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

      <h3>About Me</h3>
      Hello!  My name is <span className="courier">markVelasquez.</span><br /><br />

      I am a frontend web developer based in Southern California, USA.
      If you think that your business could benefit from a website, I am available to help you realize your vision.  I thrive on creating quality web
      products and beautiful user interfaces for your customers.  I look forward to meeting you and laying down the frameworks for your business
      or social venture. <br /><br />

      I develop web products primarily in HTML5, CSS3, Javascript, React, Express, and Node.js., however I do
      have experience in a handful of languages and frameworks to include Python, jQuery, Angular, Django, SciPy/MatPlotLib, and C++.<br /><br />

      I am a self-taught programmer and regularly consume massive quantities of documentation on programming technologies and/or books and articles on web development trends.
      As for formal education, I have a B.S. in Mechanical Engineering and have worked the last 5 years as a US Naval ship-driver and an Engineer in a seagoing nuclear power plant.
      I have always been fascinated by automation and controls, and programming is a natural extension of that fascination.  It never fails to inspire my curiosity
      to imagine how an outdated way of doing things could be much improved by using technology.  I also have a passion for all things creative, to include design and website
      development.  Web design has been a great hobby of mine since I was a younger when as children, my sister and I used to create our own websites on the old CMS/Website hosting
      services of GeoCities and AngelFire (anyone remember these?)...  I have created websites documenting some of the things my friends and I have been into over the years.<br /><br />

      Reach me anytime at <a href="mailto:iamsquez@gmail.com">iamsquez@gmail.com</a> or visit me on <a href="http://github.com/squezm">GitHub</a>.<br /><br />

      I look forward to working with you and I am always open to collaboration!  Send me an email if you have an idea you'd like to work with me on.<br /><br />

      <h3>About this website</h3>

      This site was built using Node, Express, MongoDB, Mongoose, and React for the main stack.<br /><br />

      Although the final version of this website does not use any CSS frameworks, I started drafting it using Yahoo's <a href="http://purecss.io">Pure CSS</a>.<br /><br />
      With CSS Grids and Flexbox, it is awesome to be able to omit the use of Bootstrap for responsive layouts.
      React makes it very easy to separate concerns, modify my codebase and create UI's all without necessarily needing jQuery.
      The website itself is currently hosted on <a href="http://www.heroku.com">Heroku</a> using free web dynos, which explains why it takes nearly forever to initially wake up the server after about 30
      minutes of downtime.  The MongoDB database is hosted on MongoLab.  I used Javascript Fetch to create the comments API on the main page.
      Thanks to Richard Clark for the <a href="https://github.com/richard-clark/Gear-Generator">Gear Generator</a> which was used to generate the SVG spur gears used in the animation
      on this page.  CSS absolute positioning and animations were used to make the gear train go roundy round.


    </div>

  </div>
  )

const About = () => (
    <div className="about">
      <Route path="/about" component={aboutContent}/>
    </div>

  );

export default About;
