export const createError = (code, message) => {
  // code body
  const error = new Error(message);
  error.code = code 
  throw error
};
