import { React, Component } from "react";
import { withRouter } from "react-router-dom";

class Dummy extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Dummy</h1>
      </div>
    );
  }
}

export default withRouter(Dummy);
