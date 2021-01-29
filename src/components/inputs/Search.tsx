import React, { PropsWithChildren } from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

import { PrimaryButton } from "../buttons/Buttons";

// import Icon from "@mdi/react";
// import {
//   mdiInformation,
//   mdiAlert,
//   mdiAlertCircle,
//   mdiCheckCircle
// } from "@mdi/js";

interface ISearchProps {
  size?: string;
  filter?: string;
  icon?: string;
}

function Search({
  size,
  filter,
  icon,
  children,
}: PropsWithChildren<ISearchProps>) {
  //   const removeRef = useRef();
  //   removeRef.current = remove;

  //   useEffect(() => {
  //     const duration = 5000;
  //     const id = setTimeout(() => removeRef.current(), duration);

  //     return () => clearTimeout(id);
  //   }, []);

  //   let icon;
  //   switch (color) {
  //     case "info":
  //       icon = mdiInformation;
  //       break;
  //     case "success":
  //       icon = mdiCheckCircle;
  //       break;
  //     case "warning":
  //       icon = mdiAlert;
  //       break;
  //     case "danger":
  //       icon = mdiAlertCircle;
  //       break;
  //     default:
  //       icon = mdiInformation;
  //   }

  return (
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append">
        <PrimaryButton>Search</PrimaryButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

export default Search;
