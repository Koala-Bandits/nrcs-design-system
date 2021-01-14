import React from "react";

// export class ContentHeaderH1 extends React.Component {
//   render() {
//     return (
//       <h1 className="border-bottom w-100 pb-1 mb-3">{this.props.children}</h1>
//     );
//   }
// }

type HTMLHeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface IProps extends React.PropsWithChildren<HTMLHeadingProps> {
  className?: string;
  size?: "sm";
}

// TODO: consider using the library "classnames" for class calculations
export const ContentHeaderH1 = ({
  size,
  children,
  className,
  ...rest
}: IProps) => {
  let classes = "border-bottom w-100 pb-1 mb-3";
  if (className) {
    classes = classes + " " + className;
  }
  if (size === "sm") {
    classes = classes + " h1-sm";
  }

  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
};

export const ContentHeaderH2 = ({ size, children, ...rest }: IProps) => {
  let classes = "border-bottom w-100 pb-1 mt-4 mb-3";
  if (size === "sm") {
    classes = classes + " h2-sm";
  }

  return (
    <h2 className={classes} {...rest}>
      {children}
    </h2>
  );
};

export const ContentHeaderH3 = ({ size, children, ...rest }: IProps) => {
  let classes = "border-bottom w-100 pb-1 mt-4 mb-3";
  if (size === "sm") {
    classes = classes + " h3-sm";
  }

  return (
    <h3 className={classes} {...rest}>
      {children}
    </h3>
  );
};

export const ContentHeaderH4 = ({ size, children, ...rest }: IProps) => {
  let classes = "border-bottom w-100 pb-1 mt-4 mb-3";
  if (size === "sm") {
    classes = classes + " h4-sm";
  }

  return (
    <h4 className={classes} {...rest}>
      {children}
    </h4>
  );
};

export const ContentHeaderH5 = ({ size, children, ...rest }: IProps) => {
  let classes = "border-bottom w-100 pb-1 mt-4 mb-3";
  if (size === "sm") {
    classes = classes + " h5-sm";
  }

  return (
    <h5 className={classes} {...rest}>
      {children}
    </h5>
  );
};

export const ContentHeaderH6 = ({ size, children, ...rest }: IProps) => {
  let classes = "border-bottom w-100 pb-1 mt-4 mb-3";
  if (size === "sm") {
    classes = classes + " h6-sm";
  }

  return (
    <h6 className={classes} {...rest}>
      {children}
    </h6>
  );
};
