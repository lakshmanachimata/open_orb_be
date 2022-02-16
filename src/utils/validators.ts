const utils = require('./utils');

export const checkObjectId = (value, helpers) => {
  if (!utils.isValidObjectId(value)) {
    return helpers.message(`${value} is not a valid ObjectID`);
  }
  return value;
};

export const checkIfValidationError = (err) => {
  if (err.error && err.error == 'Bad Request') {
    return true;
  }
  return false;
};

export const checkIfValidJSON = (err) => {
  if (err.status == 400 && err.type == 'entity.parse.failed') {
    return true;
  }
  return false;
};

export default {
  checkObjectId,
  checkIfValidJSON,
  checkIfValidationError
};
