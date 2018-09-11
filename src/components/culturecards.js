import React, {Component} from "react";

export default class CultureCards extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card"> <h2 className="card-heading">TRP</h2>
          <button className="card__button"> <a href="https://www.maricopa.gov/2388/Travel-Reduction-Program">Trip Reduction Program</a></button>
          </div>
        <div className="card">
          <h2 className="card-heading">talks @ melt</h2>
        <button className="card__button"><a href="https://confluence.meltdev.com/display/MELTHR/talks@melt+Speaker+Series">Lets talk</a></button>
      </div>
        <div className="card">
          <h2 className="card-heading">Read melt history</h2>
          <button className="card__button"><a href="http://meltmedia.tumblr.com/">Timeline</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">meltmedias values</h2>
          <button className="card__button"><a href="http://slides.com/meltmedia/meltmedia-values">melt values</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Give Kudos</h2>
          <button className="card__button"><a href="https://docs.google.com/a/meltmedia.com/spreadsheet/viewform?fromEmail=true&formkey=dGxFYndURUI2bjR6dU10Z3NGRExMX2c6MA">Superhero Awards</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Help a local superhero </h2>
          <button className="card__button"><a href="http://goo.gl/forms/6MPa9VunGz">SITC</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Eco Squad </h2>
          <button className="card__button"><a href="https://docs.google.com/a/meltmedia.com/forms/d/e/1FAIpQLSekBaWwOnR9Te-DOCn2swIlanZlGjSnZ4i1_VVaTSkhN4zxbQ/viewform">Make a Suggestion</a></button>
        </div>
      </div>
    );
  }
}
