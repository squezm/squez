import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import AppArticle from './AppArticle';
import AppComments from './AppComments';
import About from './About';

import './App.css';

/* ================TODO================================================
* Re-factoring is your friend
* Figure out how to improve performance by removing calculations from render() methods
* Place them into other lifecycle events
* Leave a comment by clicking on a star (out of 5)
======================================================================*/

//Links and NavLinks return an 'a' element. Apply DOM styling and behaviors accordingly.
//nest the list item inside the link so that clicking the list item will activate the NavLink
const AppMenu = props => (
  <div>
    <ul className="flex-menu">
      <NavLink exact to="/" activeClassName="active-link" onClick={props.start}><li>Home</li></NavLink>
      <NavLink to="/about" activeClassName="active-link" onClick={props.start}><li>About</li></NavLink>
      <a href="http://github.com/squezm"><li>GitHub</li></a>
    </ul>
  </div>
)

function AppMobileMenu(props) {
  return (
    <div className="App-mobile-menu" onClick={props.clickMenu}>
      M E N U <div className={props.menuAni}>{props.menuIcon}</div>
    </div>
  );
}

function AppMobileLinks(props){
  return(
    <div className="App-mobile-links">
      <AppMenu
        start={props.starting}
        hide={props.hiding}
      />
    </div>
  );
}

const Header = (props) => (
  <Route exact path="/" render={()=>(
    <header className="App-header">
      <h1 className="App-title" onClick={props.start}>

          <div className="large">SQUEZ</div>
          <span>Site Designs</span>

      </h1>
    </header>
  )}/>
)

const Home = (props) => (
  <Route exact path="/" render={()=>(
    <div className="App-content">
      <AppArticle
        date={props.dateNow}
        rate={props.rating}
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
        <div className="circle" onClick={this.props.top}>
          <div className={bouncy}>
            <div className="arrow-up"></div>
            <div className="arrow-up arrow-up-lower"></div>
          </div>
        </div>
      </div>
    );
  }
}

const nowDate = new Date().toLocaleString();

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
      returnIsVis: "hidden",
      logoIsVis: true,
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
    this.logoAction = this.logoAction.bind(this);
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
    }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let partialState = {currentComment: this.state.currentComment};
    partialState.currentComment[name] = value;
    this.setState(partialState);
  }

  /*getDate(){
    //Use this method if you want to store date as a String vice as a Date object.
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
    //new plan is to modify model to accept a date object and process it after GETing it via API.
    //below is now used post fetch.
  }*/


  outputDate(dateFetched){
    let dateIn, dateNow, dateOut, unit, monthNow, monthIn, dayNow, dayIn,
    yearNow, yearIn, hoursNow, hoursIn, minutesNow, minutesIn, secondsNow, secondsIn, recentSecs;
    dateNow = new Date();
    dateIn = new Date(dateFetched); //accepts Date object from database entry
    monthNow = dateNow.getMonth(); monthIn = dateIn.getMonth();
    dayNow = dateNow.getDate(); dayIn = dateIn.getDate();
    yearNow = dateNow.getFullYear(); yearIn = dateIn.getFullYear();
    hoursNow = dateNow.getHours(); hoursIn = dateIn.getHours();
    minutesNow = dateNow.getMinutes(); minutesIn = dateIn.getMinutes();
    secondsNow = dateNow.getSeconds(); secondsIn = dateIn.getSeconds();
    recentSecs = 15; //How long in seconds after which 'Just posted' is no longer true anymore

//we only want to display the largest unit of time since it was posted, starting with years
    if (yearNow > yearIn) {
      dateOut = yearNow - yearIn;
      (dateOut === 1) ? unit=" year ago" : unit=" years ago";
    } else if (monthNow > monthIn) {
      dateOut = monthNow - monthIn;
      (dateOut === 1) ? unit=" month ago" : unit=" months ago";
    } else if (dayNow > dayIn) {
      dateOut = dayNow - dayIn;
      (dateOut === 1) ? unit=" day ago" : unit=" days ago";
    } else if (hoursNow > hoursIn) {
      dateOut = hoursNow - hoursIn;
      (dateOut === 1) ? unit=" hour ago" : unit=" hours ago";
    } else if (minutesNow > minutesIn) {
      dateOut = minutesNow - minutesIn;
      (dateOut === 1) ? unit=" minute ago" : unit=" minutes ago";
    } else if ( (secondsNow > secondsIn) && ( (secondsNow - secondsIn)>recentSecs) ) {
      dateOut = secondsNow - secondsIn;
      unit=" seconds ago";
    } else { dateOut = "Just posted"; unit=""}

    dateOut = dateOut.toString() + unit;
    return dateOut;
  }

  handleSubmit(event) {
    event.preventDefault();

    let partialState = {currentComment: this.state.currentComment};

    //let dateNow = this.getDate();
    let dateNow = new Date();
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
      setTimeout(()=>(document.location.reload(true)),1);
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
    let speedFactor = 1;
    const deltaY = -1 * speedFactor * Math.round(window.scrollY/24);
    const scrollUp = () => {
      var yPos = window.scrollY;
      yPos > 0 ? (window.scrollBy(0, deltaY), requestAnimationFrame(scrollUp)) : (
        window.scrollTo(0, 0), cancelAnimationFrame(scrollUp));
      }
    requestAnimationFrame(scrollUp);
  }

  startPage(){
    let speedFactor = 1;
    let screenHeight = window.screen.height;
    const deltaY = speedFactor * Math.round(screenHeight/37);
    const scrollToStart = () => {
      var yPos = window.scrollY;
      (yPos < 370) ? (window.scrollBy(0, deltaY), requestAnimationFrame(scrollToStart)) : (
        window.scrollTo(0, 370), cancelAnimationFrame(scrollToStart));
    }
    requestAnimationFrame(scrollToStart);
  }

  logoAction() {
    this.state.menuStatus ? ( this.hideMobileMenu(), this.startPage()
  ) : ( this.startPage());
  }

  outputRating(stars){
    let starString = "";
    for (let i=0; i<stars; i++) {
      starString += "\u2605";
    }
    return starString;
  }

  render() {

    const users = this.state.users.slice();
    const userList = users.map(user=>
      (<li key={user._id}>User #{user._id} is {user.username}</li>)
    );

    const comments = this.state.comments.slice();
    comments.reverse(); //put comments in reverse chronological order

    var totalRating=0;
    for (let comment of comments) {
      totalRating += parseInt(comment.rating);
    }
    totalRating = Math.round(totalRating / comments.length);

    const commentList = comments.map(comment=>
    (
      <li key={comment._id} className="comment-item">
        {comment.name}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <i><small>{this.outputDate(comment.date)}</small></i>
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

          <Link
            to="/"
            className={this.state.returnIsVis}
            >
            <div className="s2d">
              <a onClick={this.logoAction}>
                S<sup>2</sup>D
              </a>
            </div>
          </Link>

          <div className="App-menu">
            <AppMenu
              start={this.logoAction}
            />
          </div>

          <AppMobileMenu
            clickMenu={this.menuClickToggle}
            menuAni={menuStatus}
            menuIcon={icon}
          />

          <div className={isOpen}>
            <AppMobileLinks
              starting={this.logoAction}
              hiding={this.hideMobileMenu}
            />
          </div>

          <Header start={this.startPage} />

          <About />

          <div className="slidy">



            <Home
              dateNow={nowDate}
              handleInputChange={this.handleChange}
              handleFormSubmit={this.handleSubmit}
              commentObject={this.state.currentComment}
              commentWarned={commentWarning}
              userList = {userList}
              commentList = {commentList}
              rating = {this.outputRating(totalRating)}
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
