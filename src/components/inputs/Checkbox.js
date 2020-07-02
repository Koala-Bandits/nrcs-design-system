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
  // let initialState = checked ? 1 : 0;

  // state variable, 0 = unchecked, 1 = checked, x = indeterminate
  const [checkState, setCheckState] = useState(checked);

  // let ind = indeterminate;

  const setState = event => {
    if (indeterminate) {
      indeterminate = false;
    }
    setCheckState(!checkState);
  };

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
      onClick={() => setState}
    />
  );
};
