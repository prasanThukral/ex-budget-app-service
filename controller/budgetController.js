const BudgetRepository = require("../repository/budgetRepository");
const BudgetService = require("../service/budgetService");
const { logger } = require("../util/index");

class BudgetController {
  static async createBudgetController(req, res) {
    try {
      const createdBudget = await BudgetService.createBudgetService(req.body);
      res.status(200).json({
        status: "sucess",
        message: createdBudget,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getBudgetController(req, res) {
    try {
      const { name, userId } = req.params;
      const budgets = await BudgetService.getAllBudgetService(name, userId);
      res.status(200).json({
        message: budgets,
      });
    } catch (error) {
      res.status(error.code).json({
        message: error.message,
      });
    }
  }

  static async getAllBudgetController(req, res) {
    try {
      const { userId } = req.params;
      const allBudgets = await BudgetRepository.getAllBudget(userId);
      logger.info(`${allBudgets} allBudgets`);

      res.status(200).json({
        message: allBudgets,
      });
    } catch (error) {
      logger.info(
        `${error.message} is getting showed at the getAllBudgetController`
      );
      res.status(error.code).json({
        message: error.message,
      });
    }
  }
}
module.exports = BudgetController;
