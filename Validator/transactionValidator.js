const Joi = require("joi");

const createTransationValidation = Joi.object({
  budgetName: Joi.string().required(),
  userId: Joi.number().required(),
  amount: Joi.number().required(),
  memo: Joi.string().required().max(100),
});
module.exports = { createTransationValidation };
