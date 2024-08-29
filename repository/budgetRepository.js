const budgetModel = require("./models/budgetModel");
const { ERROR_CODES, errorBuilder } = require("../error/index");
const { logger } = require("../util/index");

class BudgetRepository {
  static async createBudgetRepository(reqObject) {
    try {
      const createdBudget = await budgetModel.create(reqObject);
      return createdBudget;
    } catch (error) {
      logger.info(
        `createBudgetRepository has the following error ${error.message}`
      );
      const err = errorBuilder(ERROR_CODES.CREATE_BUDGET_REPO_ERROR);
      throw err;
    }
  }

  static async findLastBudget() {
    try {
      const lastTransaction = await budgetModel
        .findOne()
        .sort({ createdAt: -1 })
        .exec();
      return lastTransaction;
    } catch (error) {
      logger.info(`error coming from userSignInRepository ${error.message}`);
      const err = errorBuilder(ERROR_CODES.USER_LAST_BUDGET_REPO_ERROR);
      throw err;
    }
  }

  static async getBudget(name, userID) {
    try {
      const budgetReceived = await budgetModel.findOne({
        name: name,
        userId: userID,
      });
      return budgetReceived;
    } catch (error) {
      const err = errorBuilder(ERROR_CODES.GET_BUDGET_ERROR);
      logger.info(`error at the get budget ${error.message}`);
      throw err;
    }
  }

  static async getAllBudget(userId) {
    try {
      console.log(userId);
      const getAllBudget = await budgetModel.find({ userId: userId });
      console.log(getAllBudget);
      return getAllBudget;
    } catch (error) {
      logger.info(`error at the getAllBudget ${error.message}`);
      const err = errorBuilder(ERROR_CODES.GET_ALL_BUDGET);
      throw err;
    }
  }

  static async updateBudgets(budgetId, requestObject) {
    try {
      const updatedBudget = await budgetModel.updateOne(
        { budgetId: budgetId },
        {
          $set: requestObject,
        }
      );
      return updatedBudget;
    } catch (error) {
      logger.info(`error at the getAllBudget ${error.message}`);
      const err = errorBuilder(ERROR_CODES.GET_ALL_BUDGET);
      throw err;
    }
  }
}
module.exports = BudgetRepository;
