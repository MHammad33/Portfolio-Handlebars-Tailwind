const { StatusCodes } = require("http-status-codes");

const getValidationErrorMessage = (error) => {
  return Object.values(error.errors)
    .map((item) => item.message)
    .join(",");
}

const getDuplicateErrorMessage = (error) => {
  return `Duplicate value entered for ${Object.keys(error.keyValue)} field. Please choose another value`
}

// Error Handler Middleware
const errorHandler = (error, req, res, next) => {

  let customError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: error.message || "Something went wrong. Try again later."
  };

  if (error.name === "ValidationError") {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = getValidationErrorMessage(error);
  } else if (error.name === "CastError") {
    customError.statusCode = StatusCodes.NOT_FOUND;
    customError.msg = `No item found with id: ${error.value}`;
  } else if (error.code && error.code === 11000) {
    customError.msg = getDuplicateErrorMessage(error);
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;

