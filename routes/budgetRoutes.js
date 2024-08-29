const express = require("express");
const BudgetController = require("../controller/budgetController");

const budgetRouter = express.Router();

budgetRouter.post("/createBudget", BudgetController.createBudgetController);
budgetRouter.get(
  "/getAllBudget/:userId",
  BudgetController.getAllBudgetController
);
budgetRouter.get(
  "/getAllBudget/:name/:userId",
  BudgetController.getBudgetController
);
module.exports = budgetRouter;
