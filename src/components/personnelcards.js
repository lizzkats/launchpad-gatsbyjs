import React, {Component} from "react";

export default class PersonnelCards extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card"> <h2 className="card-heading">Locate a teammate</h2>
          <button className="card__button"> <a href="http://seating.meltmedia.com/">Seating Chart</a></button>
          </div>
        <div className="card">
          <h2 className="card-heading">Review open positions</h2>
          <button className="card__button"><a href="https://app.jazz.co/app/v2/launch">JAZZ</a></button>
      </div>
      <div className="card">
        <h2 className="card-heading">Health Insurance offerings</h2>
        <button className="card__button"><a href="https://www.wtwviabenefits.com/Account/LogOn?ReturnUrl=%2fConsumer%2fHome%2fPostEnrollment">VIA Benefits</a></button>
    </div>
    </div>
    );
  }
}
