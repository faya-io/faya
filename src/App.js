import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import UserProfileContainer from './user/ui/profilecontainer/UserProfileContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.scss'

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 100) {
        document.getElementsByClassName('navbar')[0].style.background = 'rgba(0,0,0,0.3)'
      } else {
        document.getElementsByClassName('navbar')[0].style.background = ''
      }
    });
  }

  render() {
    const UserContainerLoggedIn = VisibleOnlyAuth(() =>
      <UserProfileContainer />
    )

    const UserContainerNotLoggedIn = HiddenOnlyAuth(() =>
      <LoginButtonContainer />
    )

    return (
      <div className="App">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className=" ">Faya.</Link>
          </div>
          <ul className="pure-menu-list navbar-center">
            <li className="pure-menu-item">
              <Link to="/" className="">Top Bounty</Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/categories" className="">Categories</Link>
            </li>
            <li className="pure-menu-item">
              <a href="/blog" className="">Blog</a>
            </li>
            <li className="pure-menu-item">
              <a href="/about" className="">About Us</a>
            </li>
          </ul>
          <div className="profile-button navbar-right">
            <UserContainerLoggedIn />
            <UserContainerNotLoggedIn />
          </div>
        </nav>

        {this.props.children}

        <footer className="">
          <div className="logoFooter">
            <Link to="/" className="">Faya.</Link>
          </div>
          <div className="copyright">
            <span>Copyright @2017 faya Inc. All right reserved.</span>
          </div>
          <div className="footerRight">
            Privacy Policy | Term of Use | Legal | Site Map
          </div>
        </footer>
      </div>
    );
  }
}

export default App
