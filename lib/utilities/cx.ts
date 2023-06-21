const combineClassName = (defaultClassName: string, addedClassname?: string): string => {
  return `${defaultClassName}${addedClassname ? ` ${addedClassname}` : ''}`;
};

export default combineClassName;
