import React, { useState, useEffect } from "react";
import { CustomInput } from "reactstrap";

export const Checkbox = ({
  id,
  label,
  checked,
  disabled,
  inline,
  indeterminate,
  ...rest
}) => {
  const [checkState, setCheckState] = useState(checked);

  const setState = event => {
    if (indeterminate) {
      indeterminate = false;
    }
    setCheckState(!checkState);
    console.log("checkState: " + checkState);
  };

  // const hackState = event => {
  //   document.getElementById(id).checked = false;
  //   console.log("hello?");
  // };

  // hack for now
  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate:
    // Add indeterminate psuedo class
    if (indeterminate) {
      document.getElementById(id).indeterminate = true;
    }
  });

  return (
    <CustomInput
      type="checkbox"
      id={id}
      label={label}
      checked={checkState}
      disabled={disabled}
      inline={inline}
      // onChange={() => hackState}
      {...rest}
    />
  );
};
