import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import AppArticle from './AppArticle';
import AppComments from './AppComments';
import Home from './Home';
import About from './About';

import './pure-css/pure.css';
import './App.css';

/* ================To-do list:=========================================

* Re-factoring is your friend
  -Refactor to simplify via CSS framework
  -Refactor to utilize managable React components
* Prettify the forms
* Break the app into sub-apps and import into main App
* Error handling and data validation

======================================================================*/

/*(<NavLink to="/social" activeClassName="active"><li className="pure-menu-item"><a className="pure-menu-link">Social Eyes</a></li></NavLink>
<NavLink to="/articles" activeClassName="active"><li className="pure-menu-item"><a className="pure-menu-link">Arc Hive</a></li></NavLink>)*/

const AppMenu = props => (
  <div onClick={props.hideOut}>
    <ul className="pure-menu-list">
      <NavLink to="/" activeClassName="active"><li className="pure-menu-item"><a className="pure-menu-link">S<sup>2</sup>D</a></li></NavLink>
      <NavLink to="/about" activeClassName="active"><li className="pure-menu-item"><a className="pure-menu-link">About</a></li></NavLink>
    </ul>
  </div>
);

function AppMobileMenu(props) {
  return (
    <div className="App-mobile-menu" onClick={props.clickMenu}>
      M E N U <div className={props.menuAni}>{props.menuIcon}</div>
    </div>
  );
}

function AppMobileLinks(props){
  return(
    <div
      className="App-mobile-links pure-menu-vertical"
      id="AppMobileLinks"
    >
      <AppMenu hideOut={props.hideLinks}/>
    </div>
  );
}

const AppHeader = (
  <header className="App-header">
    <h1 className="App-title">
      <div className="large">SQUEZ</div><br />
      Site Designs
    </h1>
  </header>
);

/*const UserSection = (props) => (
  <div className="pure-g User-section">
    <div className="pure-u-1 pure-u-lg-7-12">
      <small>Users in database: <br />{props.users}<br /></small>
    </div>
  </div>
);*/

const AppContent = (props) => (
  <Route exact path="/" render={()=>(
    <div className="App-content">
      <AppArticle
        date={props.dateNow}
      />
      <AppComments
        comment={props.commentObject}
        handleChange={props.handleInputChange}
        handleSubmit={props.handleFormSubmit}
        commentWarn={props.commentWarned}
        comments={props.commentList}
      />
    </div>
  )}/>
);

class ReturnTop extends Component{
  constructor(props){
    super(props);
    this.state = {
      bounce: true,
      intervalId: null,
    }
    this.bounceId = null;
    this.setBounce = this.setBounce.bind(this);
  }

  setBounce(){
    this.setState({bounce: !this.state.bounce});
  }

  componentDidMount(){
    const bounceId = setInterval(this.setBounce, 1500);
    this.setState({intervalId: bounceId});
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }
  //add an animation to bounce the arrow every couple seconds
  render(){
    var bouncy = this.state.bounce ? "bounce" : "";
    return(
      <div className="goTop" onClick={this.props.top}>
        <div className="circle">
          <div className={bouncy}>
            <div className="arrow-up"></div>
            <div className="arrow-up arrow-up-lower"></div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      comments: [],
      firstLoad: true,
      menuStatus: null,
      currentComment: {
        name: null,
        rating: 5,
        content: null,
        date: null,
        home: "home",
      },
      filled: true,
      returnIsVis: "hidden"
    };
    this.menuClickToggle = this.menuClickToggle.bind(this);
    this.hideMobileMenu = this.hideMobileMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postNewComment = this.postNewComment.bind(this);
    this.warnComment = this.warnComment.bind(this);
    this.okayComment = this.okayComment.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.goToTop = this.goToTop.bind(this);
  }

  componentDidMount(){
    fetch('/users')
    .then(res=>res.json())
    .then(users=>{this.setState({users}); console.log(this.state.users)});

    fetch('/comments')
    .then(res=>res.json())
    .then(comments=>{this.setState({comments}); console.log(this.state.comments)});

    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  menuClickToggle() {
    this.state.firstLoad ? (
      this.setState({
        menuStatus: true,
        firstLoad: false,
    })
  ) : (
      this.setState({
        menuStatus: !this.state.menuStatus,
      })
  )
}

  hideMobileMenu() {
      this.setState({
        menuStatus: false,
      });
      this.goToTop();
    }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let partialState = {currentComment: this.state.currentComment};
    partialState.currentComment[name] = value;
    this.setState(partialState);
  }

  getDate(){
    let dateNow, month, day, year, hours, hour, minutes;
    dateNow = new Date();
    month = dateNow.getMonth()+1;
    day = dateNow.getDate();
    year = dateNow.getFullYear();
    hours = dateNow.getHours();
    hours > 12 ? (hours -= 12, hour = "p.m.") : hour = "a.m.";
    minutes = dateNow.getMinutes();
    dateNow = [month,day,year].join('/');
    dateNow += `\n${hours}:${minutes} ${hour}`;

    return(dateNow.toString());
  }

  handleSubmit(event) {
    event.preventDefault();

    let partialState = {currentComment: this.state.currentComment};

    let dateNow = this.getDate();
    partialState.currentComment["date"] = dateNow;
    this.setState(partialState);

    const data = this.state.currentComment;
    (!data || !data.name || !data.rating || !data.content || !data.date) ? (
      this.warnComment()
    ) : (this.okayComment(), this.postNewComment(data));
  }

  postNewComment(currentComment){
    let requestOpts = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json; charset=UTF-8"
      },
      "body": JSON.stringify(currentComment)
    };
    fetch("/comments", requestOpts)
    .then(res => res.json())
    .then(commentList => {
      console.log("Current list of comments: " + commentList);
      this.setState({commentList});
      window.location.href="#comments";
    });
  }

  warnComment(){
    this.setState({filled: false});
  }

  okayComment(){
    this.setState({filled: true});
  }

  handleScroll() {
    window.scrollY > 650 ?
    this.setState({returnIsVis: "visible"}) : this.setState({returnIsVis: "hidden"});
    }

  goToTop(){
    let speedFactor = 2;
    const deltaY = -1 * speedFactor * Math.round(window.scrollY/22);
    const scrollUp = () => {
      var yPos = window.scrollY;
      yPos > 0 ? (window.scrollBy(0, deltaY), requestAnimationFrame(scrollUp)) : (
        window.scrollTo(0, 0), cancelAnimationFrame(scrollUp));
      }
    requestAnimationFrame(scrollUp);
  }

  outputRating(stars){
    let starString = "";
    for (let i=0; i<stars; i++) {
      starString += "\u2605";
    }
    return starString;
  }

  outputDate(dateIn){
    return dateIn.toLocaleString();
  }

  render() {

    const users = this.state.users.slice();
    const userList = users.map(user=>
      (<li key={user._id}>User #{user._id} is {user.username}</li>)
    );
    const dateNow = new Date().toLocaleString();

    const comments = this.state.comments.slice();
    const commentList = comments.map(comment=>
    (
      <li key={comment._id} className="comment-item">
        {comment.name}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        {comment.date}
        <br />
        Rating: <span className="stars">{this.outputRating(comment.rating)}</span><br /><br />
        {comment.content}
      </li>
    ));

    let isOpen, menuStatus;
    const icon = this.state.menuStatus ? "x" : "";

    //Remove closing animations from the initial page load
    if (this.state.firstLoad) {
      isOpen = "menu-links-initial";
      menuStatus = "initial-menu";
    } else {
      isOpen = this.state.menuStatus ? "open" : "closed";
      menuStatus = this.state.menuStatus ? "opening" : "closing";
    }

    const commentWarning = this.state.filled ? "complete" : "incomplete";

    return (
      <div className="App">

          <div className="App-menu pure-menu pure-menu-horizontal">
            <AppMenu />
          </div>

          <AppMobileMenu
            clickMenu={this.menuClickToggle}
            menuAni={menuStatus}
            menuIcon={icon}
          />

          <div className={isOpen}>
            <AppMobileLinks hideLinks={this.hideMobileMenu} />
          </div>

          {AppHeader}

          <div className="slidy">

            <Home />

            <About />

            <AppContent
              dateNow={dateNow}
              handleInputChange={this.handleChange}
              handleFormSubmit={this.handleSubmit}
              commentObject={this.state.currentComment}
              commentWarned={commentWarning}
              userList = {userList}
              commentList = {commentList}
            />

            <div className={this.state.returnIsVis}>
              <ReturnTop top={this.goToTop}/>
            </div>

          </div>

      </div>
    );
  }
}

export default App;
