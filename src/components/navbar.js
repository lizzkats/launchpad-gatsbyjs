import React, {Component} from "react";
import Link from "gatsby-link";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li className="nav-item">
            <Link to="/"
                activeStyle={{color: 'lightblue'}}>
                HOME
                </Link>
                </li>
          <li className="nav-item">
            <Link
              to="/hr/"
              activeStyle={{
                color: 'lightblue'
              }}>
            HR
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/personnel/"
              activeStyle={{
                color: 'lightblue'
              }}>
            PERSONNEL
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projectmanagement/"
              activeStyle={{
                color: 'lightblue'
              }}>
            PROJECT MANAGEMENT
            </Link>
          </li>
          <li className="nav-item">
          <Link
              to="/dev/"
              activeStyle={{
                color: 'lightblue'
              }}>
            DEVELOPMENT
            </Link>
          </li>
          <li className="nav-item">
          <Link
              to="/marketing/"
              activeStyle={{
                color: 'lightblue'
              }}>
            MARKETING
            </Link>
          </li>
          <li className="nav-item">
          <Link
              to="/culture/"
              activeStyle={{
                color: 'lightblue'
              }}>
            CULTURE
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
