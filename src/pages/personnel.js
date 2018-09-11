import React from "react";
import Link from "gatsby-link";
import NavBar from '../components/navbar.js';
import Category from '../components/category.js';
import PersonnelCards from '../components/personnelcards.js';

export default () => (
  <div>
    <NavBar />
    <Category currentCategory="Personnel"/>
    <PersonnelCards />
  </div>
);
