import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav>
          <div>
            <div className="navbar-fixed-top">
              <ul className="navbar-nav">
                <li className="nav-link">
                  <Link to="/">Josh Ellis</Link>
                </li>
                <li className="nav-link">
                  <Link to="/about">Get to Know Me</Link>
                </li>
                <li className="nav-link">
                  <Link to="/portfolio">My Work</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="navbar-fixed-bottom">
        <a href="https://github.com/jellis720" class="btn-link">GitHub</a>
        <a href="https://www.facebook.com/joshrellis" class="btn-link">Facebook</a>
        <a href="https://www.instagram.com/whysojellis" class="btn-link">Instagram</a>
        </footer>
      </div>
    );
  }
}
