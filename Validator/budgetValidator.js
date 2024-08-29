const Joi = require("joi");

const createBudgetValidation = Joi.object({
  userId: Joi.number().required(),
  name: Joi.string().required(),
  budget: Joi.number().required(),
});
const getBudgetValidation = Joi.object({
  name: Joi.number().required(),
  userId: Joi.number().required(),
});
module.exports = { createBudgetValidation, getBudgetValidation };
