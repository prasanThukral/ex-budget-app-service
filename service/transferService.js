const TransferRepository = require("../repository/transferRepository");
const BudgetRepository = require("../repository/budgetRepository");
const { ERROR_CODES, errorBuilder } = require("../error/index");
const { logger } = require("../util/index");

class TransferService {
  static async createTransferService(reqObject) {
    try {
      const lastTransaction = await TransferRepository.findLastTransaction();
      reqObject.transferId = !lastTransaction
        ? 2000
        : lastTransaction.transferId + 1;
      const checkBudget = await BudgetRepository.getBudget(
        reqObject.budgetName,
        reqObject.userId
      );

      if (!checkBudget) throw errorBuilder(ERROR_CODES.WRONG_BUDGET_ID);
      console.log(`${JSON.stringify(checkBudget)} prasan`);
      const { transactions } = checkBudget;
      console.log(transactions);
      transactions.push(reqObject.transferId);
      if (checkBudget.budgetStartedOn === new Date().getDate()) {
        checkBudget.spent = 0;
      }
      const spent = checkBudget.spent + reqObject.amount;
      if (checkBudget.budget < spent)
        throw errorBuilder(ERROR_CODES.EXHAUSTED_BUDGET);
      const budgetDTO = {
        transactions: transactions,
        spent: spent,
      };
      reqObject.budgetId = checkBudget.budgetId;
      console.log(`${checkBudget.budgetId} checkBudget`);
      const responseBudget = await BudgetRepository.updateBudgets(
        checkBudget.budgetId,
        budgetDTO
      );
      console.log(reqObject);
      const requestTransferDTO = {
        userId: reqObject.userId,
        amount: reqObject.amount,
        memo: reqObject.memo,
        transferId: reqObject.transferId,
        budgetId: reqObject.budgetId,
        date: new Date(),
      };
      const responseTransfer = await TransferRepository.createTransfers(
        requestTransferDTO
      );
      return {
        responseBudget,
        responseTransfer,
      };
    } catch (error) {
      logger.info(`error code for signUp service ${error.message}`);
      const errorCodeArr = Object.keys(ERROR_CODES);
      if (errorCodeArr.includes(error.name)) throw error;
      const err = errorBuilder(ERROR_CODES.CREATE_TRANSFER_SERVICE_ERROR);
      throw err;
    }
  }
}
module.exports = TransferService;
