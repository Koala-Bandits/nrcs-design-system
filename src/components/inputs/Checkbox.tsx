import React, { useState, useEffect } from "react";
import { CustomInput, CustomInputProps } from "reactstrap";

export const Checkbox = ({
  id,
  checked: checkedProp,
  indeterminate: indeterminateProp,
  type,
  ...rest
}: CustomInputProps) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const [indeterminate, setIndeterminate] = useState(!!indeterminateProp);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      const el = document.getElementById(id as string) as HTMLInputElement;
      if (el) {
        el.indeterminate = true;
      }
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
