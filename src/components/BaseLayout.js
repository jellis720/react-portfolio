import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav>
          <div>
            <div className="navbar-fixed-top">
              <ul className="navbar-nav">
                <li className="nav-link">
                  <NavLink to="/" className="navText">Josh Ellis</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/About" className="navText">Get to Know Me</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Portfolio" className="navText">My Work</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Contact" className="navText">Reach Out</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/References" className="navText">Proof</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
