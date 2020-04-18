import React from "react";
import { Button, Row, Col } from "reactstrap";

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

export const ButtonFooter = ({ className, children }) => (
  <div className={`pt-3 pb-3 mt-3 border-top ${className}`}>{children}</div>
);

// export class ButtonFooter extends React.Component {
//   render() {
//     let className = "pt-3 pb-3 mt-3 border-top";
//     if (this.props.className) {
//       className += " " + this.props.className;
//     }

//     return (
//       <div className={{ className }} {...this.props}>
//         {this.props.children}
//       </div>
//     );
//   }
// }
