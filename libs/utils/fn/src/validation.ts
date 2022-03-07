export const isAllLetters = (value: string): boolean => {
  const letters = /^[A-Za-z ]+$/;

  return value.match(letters) !== null;
};
