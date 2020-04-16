import React from "react";
import { Button } from "reactstrap";

export class PrimaryButton extends React.Component {
  render() {
    return (
      <Button className="btn-main" color="primary" {...this.props}>
        {this.props.children}
      </Button>
    );
  }
}

export class SecondaryButton extends React.Component {
  render() {
    return (
      <Button className="btn-main" outline color="primary" {...this.props}>
        {this.props.children}
      </Button>
    );
  }
}

export class FlatButton extends React.Component {
  render() {
    return (
      <Button className="btn-main" color="link" {...this.props}>
        {this.props.children}
      </Button>
    );
  }
}

export class ButtonSet extends React.Component {
  render() {
    return <div className="btn-set">{this.props.children}</div>;
  }
}

export class ButtonFooter extends React.Component {
  render() {
    return <div className="p-3">{this.props.children}</div>;
  }
}
