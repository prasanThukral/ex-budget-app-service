const Joi = require("joi");

exports.userSignUpValidation = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

exports.userSignInValidation = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
});
