import React from "react";
import Link from "gatsby-link";
import NavBar from '../components/navbar.js';
import Category from '../components/category.js';
import CultureCards from '../components/culturecards.js';

export default () => (
  <div>
    <NavBar />
    <Category currentCategory="Culture"/>
    <CultureCards />
  </div>
);
