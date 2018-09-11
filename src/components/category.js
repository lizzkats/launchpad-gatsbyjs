import React, {Component} from "react";

export default class Category extends Component {

  render() {
    return (
      <div className="section-title">
        <h1>{this.props.currentCategory}</h1>
      </div>
    );
  };
};
