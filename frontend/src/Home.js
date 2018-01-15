import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const interestsArray = [
  "Web development",
  "Database",
  "Python",
  "Responsive Web Design",
  "RWD",
  "Django Rest Framework",
  "DRF",
  "Javascript",
  "Testing",
  "Data Science",
  "Analytics",
  "Django",
  "Web Layouts",
  "Secure login",
  "Web APIs",
  "CSS3",
  "Form validation",
  "CMS",
  "Content Management Systems",
  "Design",
  "Animation",
  "Media",
  "HTML",
  "HTML5",
  "CSS",
  "jQuery",
  "React",
  "Angular",
  "SciPy",
  "Heroku",
  "Git",
  "GitHub",
  "Node",
  "Web development",
  "Database",
  "Python",
  "Responsive Web Design",
  "RWD",
  "Django Rest Framework",
  "DRF",
  "Javascript",
  "Testing",
  "Data Science",
  "Analytics",
  "Django",
  "Web Layouts",
  "Secure login",
  "Web APIs",
  "CSS3",
  "Form validation",
  "CMS",
  "Content Management Systems",
  "Design",
  "Animation",
  "Media",
  "HTML",
  "HTML5",
  "CSS",
  "jQuery",
  "React",
  "Angular",
  "SciPy",
  "Heroku",
  "Git",
  "GitHub",
  "Node",
  "Web development",
  "Database",
  "Python",
  "Responsive Web Design",
  "RWD",
  "Django Rest Framework",
  "DRF",
  "Javascript",
  "Testing",
  "Data Science",
  "Analytics",
  "Django",
  "Web Layouts",
  "Secure login",
  "Web APIs",
  "CSS3",
  "Form validation",
  "CMS",
  "Content Management Systems",
  "Design",
  "Animation",
  "Media",
  "HTML",
  "HTML5",
  "CSS",
  "jQuery",
  "React",
  "Angular",
  "SciPy",
  "Heroku",
  "Git",
  "GitHub",
  "Node",
  "Web development",
  "Database",
  "Python",
  "Responsive Web Design",
  "RWD",
  "Django Rest Framework",
  "DRF",
  "Javascript",
  "Testing",
  "Data Science",
  "Analytics",
  "Django",
  "Web Layouts",
  "Secure login",
  "Web APIs",
  "CSS3",
  "Form validation",
  "CMS",
  "Content Management Systems",
  "Design",
  "Animation",
  "Media",
  "HTML",
  "HTML5",
  "CSS",
  "jQuery",
  "React",
  "Angular",
  "SciPy",
  "Heroku",
  "Git",
  "GitHub",
  "Node",
];
var randArray = [];
for (let i=0; i<300; i++) {
  randArray.push( interestsArray[ Math.round( 100*Math.random() ) ] )
}
var backgroundText = randArray.join(" ");
backgroundText = backgroundText.repeat(5);

class Home extends Component {
  goMobile(){
    //

  }
  render(){

    return(
      <div>
        <Route path="/home" render={() => (
          <div>
            <div class="overlay">
            S2D<br />
            <div onClick={this.goMobile}>CLICK HERE FOR MOBILE VERSION</div><br />

            Services:
            -I create websites
            -Updating old web pages to utilize modern web design trends
            -Forms, CMS services, user login/logout and admin portals
            -Database development, database management
            -E-commerce
            -Secure login functionality
            Frontend:
            -Color schemes, font selection
            -Image and video / media
            -Responsive web design - layouts that look great and adapt to any
             screen size ranging from iPhone/Android phones to full size Desktop
             computers
            -Testing: ensure site runs well when internet connection is slow or
             almost non-existent
            -Advertisement: linking business ads between sites to generate web traffic
            -HTML5 / CSS3
            -Web Layout

            Data science:
            -Python data science packages
            -Engineering design and calculations
            -Trend/statistical analysis
            -Example of traffic to this site

            Collaboration:
            -Please contact me if you would like to collaborate on a project.

            The source code for all pages on this site is available at <a href="http://www.github.com/squezm">GitHub</a>.
          </div>

          {backgroundText}

          </div>
        )}/>
  </div>
)
}
}

export default Home;
