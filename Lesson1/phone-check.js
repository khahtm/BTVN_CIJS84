export const isPhoneNumber = (str) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(str);
  }