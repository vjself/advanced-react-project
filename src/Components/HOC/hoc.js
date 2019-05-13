import React from "react";
import Axios from "axios";

export default function hoc(Component, url) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    getData = () => {
      Axios.get(url).then(res => {
        console.log("Res data", res.data);
        this.setState({
          data: res.data
        });
      });
    };

    render() {
      return (
        <div>
          {this.state.data ? (
            <Component {...this.props} data={this.state.data} />
          ) : (
            this.getData()
          )}
        </div>
      );
    }
  };
}
