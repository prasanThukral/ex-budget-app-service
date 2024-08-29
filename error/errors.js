const errors = {
  INTERNAL_SERVER_ERROR: {
    name: "INTERNAL_SERVER_ERROR",
    code: "100",
    statusCode: 500,
  },
  USER_SIGN_UP_REPO_ERROR: {
    name: "USER_SIGN_UP_REPO_ERROR",
    code: "101",
    statusCode: 500,
    message: "error at user sign up repository ",
  },
  USER_SIGN_IN_REPO_ERROR: {
    name: "USER_SIGN_IN_REPO_ERROR",
    code: "102",
    statusCode: 500,
    message: "error at user sign up repository ",
  },
  USER_LAST_TRANASACTION_REPO_ERROR: {
    name: "USER_LAST_TRANASACTION_REPO_ERROR",
    code: "103",
    statusCode: 500,
    message: "error at user findLastTransaction repository ",
  },
  HASH_UTIL_ERROR: {
    name: "HASH_UTIL_ERROR",
    code: "104",
    statusCode: 500,
    message: "error at user hashedPasswd util ",
  },
  HASH_UTIL_VERIFY_ERROR: {
    name: "HASH_UTIL_VERIFY_ERROR",
    code: "105",
    statusCode: 500,
    message: "error at user verifyHashPassword util ",
  },
  INVALID_PASSWORD: {
    name: "INVALID_PASSWORD",
    code: "106",
    statusCode: 400,
    message: "error at user service and password is incorrect ",
  },
  SIGN_IN_SERVICE_ERROR: {
    name: "SIGN_IN_SERVICE_ERROR",
    code: "107",
    statusCode: 500,
    message: "error at user service signInService method ",
  },
  USER_SIGN_UP_VALIDATION_ERROR: {
    name: "USER_SIGN_UP_VALIDATION_ERROR",
    code: "108",
    statusCode: 500,
    message: "error at user validation of sign up method ",
  },
  CREATE_BUDGET_REPO_ERROR: {
    name: "CREATE_BUDGET_REPO_ERROR",
    code: "109",
    statusCode: 500,
    message: "error at the createBudgetRepository",
  },
  GET_BUDGET_ERROR: {
    name: "GET_BUDGET_ERROR",
    code: "110",
    statusCode: 500,
    message: "error at the getBudgetError",
  },
  INVALID_USERNAME: {
    name: "INVALID_USERNAME",
    code: "111",
    statusCode: 400,
    message: "username is invalid",
  },
  CREATE_TRANSFER_ERROR: {
    name: "CREATE_TRANSFER_ERROR",
    code: "112",
    statusCode: 500,
    message: "error at repo of create transfer error",
  },
  CREATE_TRANSFER_SERVICE_ERROR: {
    name: "CREATE_TRANSFER_SERVICE_ERROR",
    code: "113",
    statusCode: 500,
    message: "error at SERVICE of create transfer error",
  },
  BUDGET_ALREADY_EXIST: {
    name: "BUDGET_ALREADY_EXIST",
    code: "114",
    statusCode: 400,
    message: "Please choose a different name for your budget",
  },
};

module.exports = errors;
