import React from "react";
import Link from "gatsby-link";
import NavBar from '../components/navbar.js';
import Category from '../components/category.js';
import DevCards from '../components/devcards.js';

export default () => (
  <div>
    <NavBar />
    <Category currentCategory="Development"/>
    <DevCards />
  </div>
);
