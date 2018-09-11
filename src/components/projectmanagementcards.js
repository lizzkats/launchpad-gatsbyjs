import React, {Component} from "react";

export default class ProjectManagementCards extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card"> <h2 className="card-heading">Manage Project Tasks</h2>
          <button className="card__button"> <a href="https://jira.meltdev.com/">JIRA</a></button>
          </div>
        <div className="card">
          <h2 className="card-heading">Track your time and projects</h2>
        <button className="card__button"><a href="https://meltmedia.mavenlink.com">Mavenlink</a></button>
      </div>
        <div className="card">
          <h2 className="card-heading">View resource dashboard</h2>
          <button className="card__button"><a href="http://super-dashy.cu.melt.sh/">Super Dashy</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Collaborate on docs</h2>
          <button className="card__button"><a href="https://docs.google.com">Google Docs</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Book your schedule</h2>
          <button className="card__button"><a href="https://www.google.com/calendar/">Calendar</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Go to Smartsheet</h2>
          <button className="card__button"><a href="http://smartsheet.com/">Smartsheet</a></button>
        </div>
        <div className="card">
          <h2 className="card-heading">Share external files</h2>
          <button className="card__button"><a href="https://share.melt.sh/">Simple share</a></button>
        </div>
      </div>
    );
  }
}
