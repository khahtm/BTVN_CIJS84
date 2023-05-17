export const isAlphabetic = (str) => {
    const alphabeticRegex = /^[a-zA-Z]+$/;
    return alphabeticRegex.test(str);
  };
