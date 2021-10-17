import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt-5">Hello, {this.props.location.user}</h1>
      </div>
    );
  }
}

export default Welcome;
