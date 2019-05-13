import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ padding: "20px" }}>
          <Link to="/">Presentational</Link>
        </div>

        <div style={{ padding: "20px" }}>
          <Link to="/hoc">Higher Order Component</Link>
        </div>

        <div style={{ padding: "20px" }}>
          <Link to="/render-props">Render Props</Link>
        </div>
      </div>
    );
  }
}
