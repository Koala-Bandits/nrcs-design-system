import { INrcsCustomInputProps, INrcsReadOnly } from "../../types/types";
import { CustomInput } from "reactstrap";
import { useReadOnlyConfig } from "hooks";

export interface IRadioProps extends INrcsCustomInputProps, INrcsReadOnly {}

export const Radio = ({
  indeterminate,
  type,
  readOnly,
  className,
  onChange,
  onKeyDown,
  ...rest
}: IRadioProps) => {
  const { composedClassNames, handler, keyDownHandler } = useReadOnlyConfig({
    readOnly,
    handlerCallBack: onChange,
    keyDownCallBack: onKeyDown,
    className,
  });

  return (
    <CustomInput
      {...rest}
      onChange={handler}
      className={composedClassNames}
      onKeyDown={keyDownHandler}
      aria-disabled={readOnly}
      type="radio"
    />
  );
};
