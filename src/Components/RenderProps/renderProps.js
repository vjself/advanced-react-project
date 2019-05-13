import React, { Component } from "react";
import Axios from "axios";

export default class RenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  getSomeData = () => {
    Axios.get(this.props.url).then(res => {
      console.log("RenderPropsRes", res.data);
      this.setState({
        data: res.data
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.data
          ? this.props.getDemProducts(this.state.data)
          : this.getSomeData()}
      </div>
    );
  }
}
