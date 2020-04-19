import React from "react";
import { Button, Row, Col } from "reactstrap";

export class PrimaryButton extends React.Component {
  render() {
    return <Button className="btn-main" color="primary" {...this.props} />;
  }
}

export class SecondaryButton extends React.Component {
  render() {
    return (
      <Button className="btn-main" outline color="primary" {...this.props} />
    );
  }
}

// export const FlatButton = ({ className, ...rest }) => (
//   <Button className={`btn-main ${className}`} color="link" {...rest}></Button>
// );

export class FlatButton extends React.Component {
  render() {
    return <Button className="btn-main" color="link" {...this.props} />;
  }
}

export class ButtonSet extends React.Component {
  render() {
    return <div className="btn-set" {...this.props}></div>;
  }
}

export const ButtonFooter = ({ className, children }) => (
  <div className={`pt-3 mt-3 border-top ${className}`}>{children}</div>
);
