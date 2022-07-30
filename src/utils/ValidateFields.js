export const validatePhone = (phone) => {
  // phone must have at least 8 characters and less than 14, only numbers are allowed
  if (phone.length < 8 || phone.length > 14) {
    return false;
  }
  if (phone.match(/[^0-9]/g)) {
    return false;
  }
  return true;
};

export const validateBirthday = (birthday) => {
  // regex for birthday format: yyyy-mm-dd birthdate cannot be in the future
  const today = new Date();
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(birthday) && new Date(birthday) < today;
};
