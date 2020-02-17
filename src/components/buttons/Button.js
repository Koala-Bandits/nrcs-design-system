import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="bg-primary">
        <div className="container text-white pt-5 h1">
          <a href="/home">
            HOME<small>vBETA</small>
          </a>
        </div>
      </div>
    );
  }
}

export default Button;
