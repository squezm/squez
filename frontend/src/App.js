import React, { Component } from 'react';
import logo from './logo.svg';
import './pure-css/base-min.css';
import './pure-css/menus-min.css';
import './pure-css/grids-min.css'
import './pure-css/grids-responsive.css';
import './pure-css/forms-min.css';
import './pure-css/buttons-min.css';
import './App.css';
//import BasicExample from './BasicExample';

/* ================To-do list:=========================================

* Break app layout into more managable components
* Integrate CSS framework for (this is just much more maintainable and quicker)
  -Menu
  -Content grids
* One-way data bind the form to API variables
* Re-factoring is your friend
  -Refactor to simplify via CSS framework
  -Refactor to utilize managable React components
*Prettify the forms

======================================================================*/

const AppMenu = (
  <div className="App-menu pure-menu pure-menu-horizontal">
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

function AppArticle(props) {
  return (
    <div className="App-article pure-u-1 pure-u-md-7-12">

    <h3 className="App-article-title">Article Title </h3>

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
      /*                  <label for="location">Show location
    </label>*/
const AppComments = (
  <div className="App-comments pure-u-1 pure-u-md-5-12">

    <form className="pure-form pure-form-stacked">

      <fieldset>

        <legend>Comment on this article: </legend>

        <label htmlFor="name">Your name</label>
        <input id="name" type="text" placeholder="Name"/>

        <label htmlFor="rating">Rate this article</label>
        <select id="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>

        <label htmlFor="comment">Facts or opinions, all are welcome</label>
        <textarea id="comment" placeholder="Write something here..."/>

        <button type="submit" className="pure-button">Submit</button>

      </fieldset>

    </form>

  </div>
);

function ReturnTop(props){
    return(
      <span onClick={props.top}>Return to top</span>
    );
}

function EndScroll(props){
  return(
    <span onClick={props.stop}>Stop scroll</span>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    };
    this.intervalId = null;
    this.goToTop = this.goToTop.bind(this);
    this.stopScroll = this.stopScroll.bind(this);
  }

  componentDidMount(){
    fetch('/users')
    .then(res=>res.json())
    .then(users=>this.setState({users}));
  }

  goToTop(){
    let scrollSize = Math.round(window.screen.height/150);
    scrollSize = -1*scrollSize;
    function scrollTop() {
      window.scrollBy(0,scrollSize);
      console.log("scrolling");
    }
    this.intervalId = window.setInterval(scrollTop, 1);
  }

  stopScroll() {
    window.clearInterval(this.intervalId); alert("complete");
  }

  render() {
    const users = this.state.users.slice();
    const userList = users.map(user=>
      (<li key={user._id}>User #{user._id} is {user.username}</li>)
    );
    var dateNow = new Date().toLocaleString();

    return (
      <div className="App">

        {AppMenu}

        <div className="App-mobile-menu">
          Menu =
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            SQUEZ<br />
            Site Designs
          </h1>
        </header>

        <EndScroll stop={this.stopScroll} />

        <div className="App-content pure-g">
          <AppArticle date={dateNow} />
          <div>{AppComments}</div>
        </div>

        {userList}

        <ReturnTop top={this.goToTop}/>

      </div>
    );
  }
}

export default App;
