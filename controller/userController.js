const UserService = require("../service/userService");
const { ERROR_CODES, errorBuilder } = require("../error/index");
const {
  userSignUpValidator,
  userSignInValdator,
} = require("../Validator/index");
const { joiValidationErrors } = require("../error/index");

class UserController {
  static async userSignUpController(req, res) {
    try {
      console.log(req.body);
      const { error } = userSignUpValidator(req.body);
      if (error) throw joiValidationErrors(error);
      const userSignUp = await UserService.signUpService(req.body);
      res.status(200).json({
        status: "sucess",
        message: userSignUp,
      });
    } catch (error) {
      res.status(error.status).json({
        status: error,
        message: error.message,
      });
    }
  }

  static async userSignInController(req, res) {
    try {
      const { error } = userSignInValdator(req.body);
      if (error) throw joiValidationErrors(error);
      const userSignIn = await UserService.signInService(req.body);
      res.status(200).json({
        status: "sucess",
        message: userSignIn,
      });
    } catch (error) {
      res.status(error.status).json({
        status: error.code,
        message: error.message,
      });
    }
  }
}
module.exports = UserController;
