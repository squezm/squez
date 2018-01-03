import React, { Component } from 'react';
import './pure-css/base-min.css';
import './pure-css/menus-min.css';
import './pure-css/grids-min.css'
import './pure-css/grids-responsive.css';
import './pure-css/forms-min.css';
import './pure-css/buttons-min.css';
import './App.css';
//import BasicExample from './BasicExample';

/* ================To-do list:=========================================

* One-way data bind the form to API variables
* Re-factoring is your friend
  -Refactor to simplify via CSS framework
  -Refactor to utilize managable React components
*Prettify the forms
*Install react routing

======================================================================*/

const AppMenu = (
  <div>
    <ul className="pure-menu-list">
      <li className="pure-menu-item"><a className="pure-menu-link">S<sup>2</sup>D</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link">Links</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link">Arc hive</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link">About Squez</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link">Social eyes</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link">The business</a></li>
    </ul>
  </div>
);

function AppMobileMenu(props) {
  return (
    <div className="App-mobile-menu" onClick={props.clickMenu}>
      Menu <div className={props.menuAni}>{props.menuIcon}</div>
    </div>
  );
}

function AppMobileLinks(props){
  return(
    <div className="App-mobile-links pure-menu-vertical" id="AppMobileLinks">
      {AppMenu}
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

function AppArticle(props) {
  return (
    <div className="App-article pure-u-1 pure-u-md-7-12">
      <h3 className="App-article-title">
        <a className="no-underline" href="https://www.savetheinternet.com/net-neutrality-what-you-need-know-now">
          Net Neutrality
        </a>
      </h3>

      <div className="date">{props.date}</div>

      <p className="App-article-first">
        When you go online you have certain expectations. You expect to be connected to whatever website you want. You expect that your cable or phone company isn’t messing with the data and is connecting you to all websites, applications and content you choose. You expect to be in control of your internet experience.
        When you use the internet you expect Net Neutrality.
      </p>
      <p>
        Net Neutrality is the basic principle that prohibits internet service providers like AT&T, Comcast and Verizon from speeding up, slowing down or blocking any content, applications or websites you want to use. Net Neutrality is the way that the internet has always worked.
        In 2015, millions of activists pressured the Federal Communications Commission to adopt historic Net Neutrality rules that keep the internet free and open — allowing people to share and access information of their choosing without interference.
        But right now the internet is in peril.
      </p>
      <p>
        On Dec. 14, 2017, the FCC’s Republican majority approved Chairman Ajit Pai’s plan to gut the Net Neutrality protections.
        A former Verizon lawyer and a Trump appointee, Pai ignored the widespread outcry against his plan from millions of people, lawmakers, companies andco public-interest groups.
        We can’t let Pai have the last word on this — which is why we’re calling on Congress to use a “resolution of disapproval” to overturn the FCC’s vote to dismantle the Net Neutrality rules.
        Urge lawmakers to reverse the FCC vote today.
      </p>
      <p>
        What is Net Neutrality?
        Net Neutrality is the internet’s guiding principle: It preserves our right to communicate freely online. Net Neutrality means an internet that enables and protects free speech. It means that ISPs should provide us with open networks — and shouldn’t block or discriminate against any applications or content that ride over those networks. Just as your phone company shouldn’t decide who you call and what you say on that call, your ISP shouldn’t interfere with the content you view or post online.
        The internet without Net Neutrality isn’t really the internet.
      </p>
      <p>
        What will happen to the internet now?
        Without the Net Neutrality rules, companies like AT&T, Comcast and Verizon will be able to call all the shots and decide which websites, content and applications succeed.
        These companies can now slow down their competitors’ content or block political opinions they disagree with. They can charge extra fees to the few content companies that can afford to pay for preferential treatment — relegating everyone else to a slower tier of service.
        The consequences will be particularly devastating for marginalized communities media outlets have misrepresented or failed to serve. People of color, the LGBTQ community, indigenous peoples and religious minorities in the United States rely on the open internet to organize, access economic and educational opportunities, and fight back against systemic discrimination.
        Without Net Neutrality, how will activists be able to fight oppression? What will happen to social movements like the Movement for Black Lives? How will the next disruptive technology, business or company emerge if internet service providers let only incumbents succeed?
      </p>
    </div>
  );
}

function AppComments (props) {
  return(
    <div className="App-comments pure-u-1 pure-u-md-5-12">

      <form className="pure-form pure-form-stacked" onSubmit={props.handleSubmit}>

        <fieldset>
          <h3>Comment on this article</h3>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            value={props.comment.name}
            onChange={props.handleChange}
          />

          <label htmlFor="rating">Rate this article</label>
          <select
            id="rating"
            name="rating"
            value={props.comment.rating}
            onChange={props.handleChange}
            >
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>

          <label htmlFor="comment">Facts or opinions, all are welcome</label>
          <textarea
            id="comment"
            name="content"
            placeholder="Write something here..."
            value={props.comment.content}
            onChange={props.handleChange}
          />

          <button type="submit" className="pure-button">Submit</button>
        </fieldset>
      </form>

    </div>
);
}

function AppContent(props){
  return (

    <div className="App-content pure-g">
      <AppArticle
        date={props.dateNow}
      />
      <div>
        <AppComments
          comment={props.commentObject}
          handleChange={props.handleInputChange}
          handleSubmit={props.handleFormSubmit}
        />
      </div>
    </div>

  );
}

function ReturnTop(props){
    return(
      <div className="goTop" onClick={props.top}>
        The End is the Beginning <strong><sub>^</sub></strong>
      </div>
    );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      comments: [],
      firstLoad: true,
      menuStatus: null,
      comment: {
        name: "Type your name",
        rating: 5,
        content: "Write something here"
      },
    };
    this.intervalId = null;
    this.goToTop = this.goToTop.bind(this);
    this.menuClickToggle = this.menuClickToggle.bind(this);
    this.hideMobileMenu = this.hideMobileMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    fetch('/users')
    .then(res=>res.json())
    .then(users=>{this.setState({users}); console.log(this.state.users)});

    fetch('/comments')
    .then(res=>res.json())
    .then(data=>console.log("Comments: " + data));
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
      })
    }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      comment: {
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state.comment;
    let requestOpts = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json; charset=UTF-8"
      },
      "body": JSON.stringify(data)
    };
    fetch("/comments", requestOpts)
    .then(res => res.json())
    .then(data => console.log("Posted to comments: " + data));
  }

  goToTop(){
    const deltaY = -1 * Math.round(window.scrollY/22);
    const scrollUp = () => {
      var yPos = window.scrollY;
      yPos > 0 ? (window.scrollBy(0, deltaY), requestAnimationFrame(scrollUp)) : (
        window.scrollTo(0, 0), cancelAnimationFrame(scrollUp));
      }
    requestAnimationFrame(scrollUp);
  }

  render() {

    const users = this.state.users.slice();
    const userList = users.map(user=>
      (<li key={user._id}>User #{user._id} is {user.username}</li>)
    );
    const dateNow = new Date().toLocaleString();
    let commentObject = this.state.comment;

    let isOpen, menuStatus;
    const icon = this.state.menuStatus ? "x" : "=";


    //Remove closing animations from the initial page load
    if (this.state.firstLoad) {
      isOpen = "menu-links-initial";
      menuStatus = "";
    } else {
      isOpen = this.state.menuStatus ? "open" : "closed";
      menuStatus = this.state.menuStatus ? "opening" : "closing";
    }

    return (
      <div className="App">

        <div className="App-menu pure-menu pure-menu-horizontal">
          {AppMenu}
        </div>

        <AppMobileMenu
          clickMenu={this.menuClickToggle}
          menuAni={menuStatus}
          menuIcon={icon}
        />

        <div className={isOpen}>
          <AppMobileLinks />
        </div>

        <div onClick={this.hideMobileMenu}>

          {AppHeader}

          <AppContent
            dateNow={dateNow}
            handleInputChange={this.handleChange}
            handleFormSubmit={this.handleSubmit}
            commentObject={commentObject}
          />

          <small>Users in database: <br />{userList}</small>

          <ReturnTop top={this.goToTop}/>

        </div>

      </div>
    );
  }
}

export default App;
