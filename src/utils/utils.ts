export const getClassName = (defaultClass: string, classesToAppend?: string) =>
  `${defaultClass} ${classesToAppend || ""}`;
