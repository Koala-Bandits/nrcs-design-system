import React from "react";

export class ContentHeaderH1 extends React.Component {
  render() {
    return <h1 className="border-bottom w-100 pb-1">{this.props.children}</h1>;
  }
}

export class ContentHeaderH2 extends React.Component {
  render() {
    return <h2 className="border-bottom w-100 pb-1">{this.props.children}</h2>;
  }
}

export class ContentHeaderH3 extends React.Component {
  render() {
    return <h3 className="border-bottom w-100 pb-1">{this.props.children}</h3>;
  }
}

export class ContentHeaderH4 extends React.Component {
  render() {
    return <h4 className="border-bottom w-100 pb-1">{this.props.children}</h4>;
  }
}

export class ContentHeaderH5 extends React.Component {
  render() {
    return <h5 className="border-bottom w-100 pb-1">{this.props.children}</h5>;
  }
}

export class ContentHeaderH6 extends React.Component {
  render() {
    return <h6 className="border-bottom w-100 pb-1">{this.props.children}</h6>;
  }
}
