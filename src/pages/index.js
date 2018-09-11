import React from "react";
import Link from "gatsby-link";
import NavBar from '../components/navbar.js';
import Category from '../components/category.js';
import '../styles/nav.scss';

export default () =>
  <div>
        <header className="main">
          <NavBar />
          <Category currentCategory="HOME"/>
          <h1> WELCOME TO MELTMEDIA LAUNCHPAD YAY </h1>
        </header>
  </div>
