const {
  userSignInValidation,
  userSignUpValidation,
} = require("./userValidator");
const {
  createBudgetValidation,
  getBudgetValidation,
} = require("./budgetValidator");
const { createTransationValidation } = require("./transactionValidator");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });
const createBudgetValidator = validator(createBudgetValidation);
const userSignInValdator = validator(userSignInValidation);
const userSignUpValidator = validator(userSignUpValidation);
const transactionValidator = validator(createTransationValidation);
const getBudgetValidator = validator(getBudgetValidation);
module.exports = {
  userSignUpValidator,
  userSignInValdator,
  createBudgetValidator,
  transactionValidator,
  getBudgetValidator,
};
