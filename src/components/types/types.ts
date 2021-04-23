import { CSSModule } from "reactstrap";

export interface INrcsCustomInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  [key: string]: any;
  id: string | number;
  label?: React.ReactNode;
  inline?: boolean;
  valid?: boolean;
  invalid?: boolean;
  bsSize?: "lg" | "sm";
  htmlFor?: string;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
}

export interface INrcsReadOnly {
  readOnly?: boolean;
}
