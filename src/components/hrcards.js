import React, {Component} from "react";

export default class HRCards extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card"> <h2 className="card-heading">Your HR Portal</h2>
          <button className="card__button"> <a href="https://meltmedia.namely.com/users/login">Namely</a></button>
          </div>
        <div className="card">
          <h2 className="card-heading">Pet Insurance</h2>
        <button className="card__button"><a href="https://www.unitedpetcare.com/group-enrollment/?gid=meltmedia">Sign Up</a></button>
      </div>
        <div className="card">
          <h2 className="card-heading">Reserved Parking</h2>
          <button className="card__button"><a href="http://launchpad.meltmedia.com/assets/pdfs/melt-property-map.pdf">View Map</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">TeleHealth</h2>
          <button className="card__button"><a href="https://amwellforcigna.com/landing.htm">Amwell</a></button>
          <button className="card__button"><a href="http://mdliveforcigna.com/">MDLIVE</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Your teammates</h2>
          <button className="card__button"><a href="https://docs.google.com/a/meltmedia.com/spreadsheets/d/1UWco-YgkI_LNvW3w0hyHKRiRZsGj1kvlXd2mVJmpd68/edit?usp=sharing">Directory</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Locate a teammate</h2>
          <button className="card__button"><a href="http://seating.meltmedia.com/">Seating Chart</a></button>
        </div>
      </div>
    );
  }
}
