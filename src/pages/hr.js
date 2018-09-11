import React from "react";
import Link from "gatsby-link";
import NavBar from '../components/navbar.js';
import Category from '../components/category.js';
import HRCards from '../components/hrcards.js';

export default () => (
  <div>
    <NavBar />
    <Category currentCategory="HR"/>
    <HRCards />
  </div>
);
