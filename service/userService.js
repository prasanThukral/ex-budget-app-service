const userRepository = require("../repository/userRepository");
const { ERROR_CODES, errorBuilder } = require("../error/index");
const { logger, hashedPasswd, verifyHashPassword } = require("../util/index");
const BudgetRepository = require("../repository/budgetRepository");

class UserService {
  static async signUpService(reqObject) {
    try {
      const hashedPassword = hashedPasswd(reqObject.password);
      reqObject.password = hashedPassword;
      const lastTransaction = await userRepository.findLastTransaction();
      console.log(`last transaction ${lastTransaction}`);
      reqObject.userId = !lastTransaction ? 10000 : lastTransaction.userId + 1;
      console.log(reqObject);
      const savedUser = await userRepository.userSignUpRepository(reqObject);
      return savedUser;
    } catch (error) {
      logger.info(`error code for signUp service ${error.message}`);
      const errorCodeArr = Object.keys(ERROR_CODES);
      if (errorCodeArr.includes(error.name)) throw error;
      const err = errorBuilder(ERROR_CODES.SIGN_UP_SERVICE_ERROR);
      throw err;
    }
  }

  static async signInService(reqObject) {
    try {
      const responseSignIn = await userRepository.userSignInRepository(
        reqObject.email
      );
      console.log(`=======>${responseSignIn}<==========`);
      // if (responseSignIn) throw errorBuilder(ERROR_CODES.INVALID_PASSWORD);
      const verifiedHashPasswd = verifyHashPassword(
        reqObject.password,
        responseSignIn.password
      );
      if (!verifiedHashPasswd) {
        throw errorBuilder(ERROR_CODES.INVALID_PASSWORD);
      }
      //modigy while creating budgets return users budget
      const budgets = BudgetRepository.getAllBudget(responseSignIn.userId);
      const response = {
        username: responseSignIn.userName,
        budgets: budgets,
      };
      return response;
    } catch (error) {
      logger.info(`error code for signIn service ${error.status}`);
      if (error.status === 400) {
        logger.info(`error code for signInvhjuv service ${error.message}`);
        throw error;
      } else {
        const err = errorBuilder(ERROR_CODES.SIGN_IN_SERVICE_ERROR);
        throw err;
      }
    }
  }
}
module.exports = UserService;
