import React from "react";
import Link from "gatsby-link";
import NavBar from '../components/navbar.js';
import Category from '../components/category.js';
import MarketingCards from '../components/marketingcards.js';

export default () => (
  <div>
    <NavBar />
    <Category currentCategory="Marketing"/>
    <MarketingCards />
  </div>
);
