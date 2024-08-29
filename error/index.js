const error = require("./errors");
const { logger } = require("../util/index");

const ERROR_CODES = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  USER_SIGN_UP_REPO_ERROR: "USER_SIGN_UP_REPO_ERROR",
  USER_SIGN_IN_REPO_ERROR: "USER_SIGN_IN_REPO_ERROR",
  SIGN_UP_SERVICE_ERROR: "SIGN_UP_SERVICE_ERROR",
  INVALID_PASSWORD: "INVALID_PASSWORD",
  USER_LAST_TRANASACTION_REPO_ERROR: "USER_LAST_TRANASACTION_REPO_ERROR",
  HASH_UTIL_VERIFY_ERROR: "HASH_UTIL_VERIFY_ERROR",
  HASH_UTIL_ERROR: "HASH_UTIL_ERROR",
  CREATE_BUDGET_REPO_ERROR: "CREATE_BUDGET_REPO_ERROR",
  SIGN_IN_SERVICE_ERROR: "SIGN_IN_SERVICE_ERROR",
  INVALID_USERNAME: "INVALID_USERNAME",
  CREATE_TRANSFER_ERROR: "CREATE_TRANSFER_ERROR",
  BUDGET_ALREADY_EXIST: "BUDGET_ALREADY_EXIST",
  CREATE_TRANSFER_SERVICE_ERROR: "CREATE_TRANSFER_SERVICE_ERROR",
};
const errorBuilder = (erro) => {
  const err = new Error();
  const matchedError = error[erro];
  logger.info(matchedError);
  if (matchedError) {
    err.name = matchedError.name;
    err.message = matchedError.message;
    err.status = matchedError.statusCode;
  } else {
    err.status = 500;
    err.message = "Unknown error";
  }
  return err;
};

const joiValidationErrors = (message) => {
  const erro = new Error();
  erro.message = message;
  erro.status = 400;
  return erro;
};

module.exports = { ERROR_CODES, errorBuilder, joiValidationErrors };
