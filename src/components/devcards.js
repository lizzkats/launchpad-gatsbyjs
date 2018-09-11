import React, {Component} from "react";

export default class DevCards extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card"> <h2 className="card-heading">Find documentation</h2>
          <button className="card__button"> <a href="https://confluence.meltdev.com/">Confluence</a></button>
          </div>
        <div className="card">
          <h2 className="card-heading">Put a site to sleep</h2>
        <button className="card__button"><a href="https://sleepytime.meltdev.com/">Sleepy Time</a></button>
      </div>
        <div className="card">
          <h2 className="card-heading">Test a site</h2>
          <button className="card__button"><a href="http://cadmium-admin.meltdev.com/qa">melt QA</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">View email client usage</h2>
          <button className="card__button"><a href="http://email-stats.meltdemo.com/">Email Stats</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Continuous delivery</h2>
          <button className="card__button"><a href="http://totem.melt.sh/">Totem</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">HTML & CSS Guidelines</h2>
          <button className="card__button"><a href="Guidelines">Guidelines</a></button>
        </div>
      </div>
    );
  }
}
