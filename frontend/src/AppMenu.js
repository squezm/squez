import React from 'react';

//Add <li><a><Link to="/">Elements here</Link></a></li>
const AppMenu = (
  <div>
    <ul className="pure-menu-list">
      <li className="pure-menu-item"><a className="pure-menu-link" href="/">S<sup>2</sup>D</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link" href="/">Links</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link" href="/">Arc hive</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link" href="/">About Squez</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link" href="#comments">Social eyes</a></li>
      <li className="pure-menu-item"><a className="pure-menu-link" href="/">The business</a></li>
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
      onClick={props.hideLinks}
    >
      {AppMenu}
    </div>
  );
}

export default AppMenu;
export default AppMobileMenu;
export default AppMobileLinks;
