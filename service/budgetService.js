const { ERROR_CODES, errorBuilder } = require("../error/index");
const BudgetRepository = require("../repository/budgetRepository");
const UserRepository = require("../repository/userRepository");
const TransferRepository = require("../repository/transferRepository");
const { logger } = require("../util/index");

class BudgetService {
  static async createBudgetService(reqObject) {
    try {
      const verifyUser = await UserRepository.findUserRepository(
        reqObject.userId
      );
      if (!verifyUser) {
        throw errorBuilder(ERROR_CODES.INVALID_USER_ID_ERROR);
      }
      const lastBudget = await BudgetRepository.findLastBudget();
      reqObject.budgetId = !lastBudget ? 10000 : lastBudget.budgetId + 1;
      reqObject.spent = 0;
      reqObject.transaction = [];
      reqObject.budgetStartedOn = new Date().getDate();
      reqObject.lastTransfer = {
        day: new Date(),
        amount: null,
      };
      const allBudgetResponse = await BudgetRepository.getAllBudget(
        reqObject.userId
      );
      const budgetFilter = allBudgetResponse.filter(
        (a) => a.name === reqObject.name
      );
      console.log(budgetFilter);
      if (budgetFilter[0]) throw errorBuilder(ERROR_CODES.BUDGET_ALREADY_EXIST);
      const createdBudget = await BudgetRepository.createBudgetRepository(
        reqObject
      );
      return createdBudget;
    } catch (error) {
      logger.info(`error at the createBudgeService ${error.message}`);
      const errorCodeArr = Object.keys(ERROR_CODES);
      if (errorCodeArr.includes(error.name)) throw error;
      const err = errorBuilder(ERROR_CODES.CREATE_BUDGET_SERVICE_ERROR);
      throw err;
    }
  }

  static async getAllBudgetService(name, userId) {
    try {
      const budget = await BudgetRepository.getBudget(name, userId);
      const { transactions } = budget;
      const actualTransaction = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const value of transactions) {
        // eslint-disable-next-line no-await-in-loop
        const val = await TransferRepository.getTransfers(value);
        actualTransaction.push(val);
      }
      console.log(JSON.stringify(`${actualTransaction} actual transafers`));
      const amountArray = actualTransaction
        .map((a) => a.amount)
        .reduce((acc, a) => {
          return a + acc;
        }, 0);
      return { actualTransaction, amountArray };
    } catch (error) {
      logger.info(`error at the createBudgeService ${error.message}`);
      const errorCodeArr = Object.keys(ERROR_CODES);
      if (errorCodeArr.includes(error.name)) throw error;
      const err = errorBuilder(ERROR_CODES.GET_ALL_BUDGET_SERVICE_ERROR);
      throw err;
    }
  }
}
module.exports = BudgetService;
