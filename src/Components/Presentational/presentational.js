import React, { Component } from "react";
import Axios from "axios";
import Displayp from "./Displayp";

export default class Presentational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios.get("/api/products").then(res => {
      console.log("Present res - ", res.data);
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Displayp products={this.state.products} />
      </div>
    );
  }
}
