export const arrayValidation = (theArray) => {
  return Array.isArray(theArray) && theArray.length > 0;
};

export const objectValidation = (theObject) => {
  return (
    Object.entries(theObject).length > 0 && theObject.constructor === Object
  );
};
