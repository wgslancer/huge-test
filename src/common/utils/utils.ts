export const classNames = (
  ...classNames: Array<string | undefined>
): string => {
  return classNames
    .filter((className) => !!className)
    .reduce((prev, curr) => {
      return (prev as string).concat(` ${curr}`);
    }, '') as string;
};
