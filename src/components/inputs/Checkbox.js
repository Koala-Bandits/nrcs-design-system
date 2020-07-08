import React, { useRef, useState, useEffect } from "react";
import { CustomInput } from "reactstrap";

export const Checkbox = ({
  id,
  checked: checkedProp,
  indeterminate: indeterminateProp,
  ...rest
}) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const [indeterminate, setIndeterminate] = useState(!!indeterminateProp);

  const onChange = event => {
    if (indeterminate) {
      setIndeterminate(false);
    }
    setChecked(event.target.checked);
  };

  // const checkRef = useRef();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // if (!checkRef.current) return;

    // Add indeterminate psuedo class
    if (indeterminate) {
      // hack for now
      document.getElementById(id).indeterminate = true;
      // checkRef.current.indeterminate = true;
    }
  });

  return (
    <CustomInput
      id={id}
      type="checkbox"
      // ref={checkRef}
      // ref={el => el && (el.indeterminate = indeterminate)}
      {...rest}
      checked={checked}
      onChange={onChange}
    />
  );
};
