const bcrypt = require("bcrypt");
const { ERROR_CODES, errorBuilder } = require("../error/index");
const { logger } = require("./index");

const hashedPasswd = (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
  } catch (error) {
    logger.info(`error at util hashed Password ${error.message}`);
    const err = errorBuilder(ERROR_CODES.HASH_UTIL_ERROR);
    throw error;
  }
};
const verifyHashPassword = (passwordtoCheck, passwordSaved) => {
  try {
    const verified = bcrypt.compareSync(passwordtoCheck, passwordSaved);
    return verified;
  } catch (error) {
    logger.info(`error at the everify Hash Password ${error.message}`);
    const err = errorBuilder(ERROR_CODES.HASH_UTIL_VERIFY_ERROR);
    throw err;
  }
};

module.exports = { hashedPasswd, verifyHashPassword };
