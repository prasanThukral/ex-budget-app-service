const userModel = require("./models/userModels");
const { ERROR_CODES, errorBuilder } = require("../error/index");
const { logger } = require("../util/index");

class UserRepository {
  static async userSignUpRepository(reqObject) {
    try {
      const createdResposesignUp = await userModel.create(reqObject);
      return createdResposesignUp;
    } catch (error) {
      logger.info(`error coming from userSignUpRepository ${error.message}`);
      const err = errorBuilder(ERROR_CODES.USER_SIGN_UP_REPO_ERROR);
      console.log(err);
      console.log("errrrrors");
      throw err;
    }
  }

  static async userSignInRepository(reqObject) {
    try {
      const findAccount = await userModel.findOne({
        email: reqObject,
      });
      return findAccount;
    } catch (error) {
      logger.info(`error coming from userSignInRepository ${error.message}`);
      const err = errorBuilder(ERROR_CODES.USER_SIGN_IN_REPO_ERROR);
      throw err;
    }
  }

  static async findLastTransaction() {
    try {
      const lastTransaction = await userModel
        .findOne()
        .sort({ createdAt: -1 })
        .exec();
      return lastTransaction;
    } catch (error) {
      logger.info(`error coming from userSignInRepository ${error.message}`);
      const err = errorBuilder(ERROR_CODES.USER_LAST_TRANASACTION_REPO_ERROR);
      throw err;
    }
  }

  static async findUserRepository(userId) {
    try {
      const findAccount = await userModel.findOne({ userId: userId });
      return findAccount;
    } catch (error) {
      logger.info(`error coming from userSignInRepository ${error.message}`);
      const err = errorBuilder(ERROR_CODES.USER_FIND_USER_ERROR);
      throw err;
    }
  }
}
module.exports = UserRepository;
