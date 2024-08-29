const TransferService = require("../service/transferService");
const { joiValidationErrors } = require("../error/index");
const { logger } = require("../util/index");
const { transactionValidator } = require("../Validator/index");

class TransactionController {
  static async transferCreateController(req, res) {
    try {
      const { error } = transactionValidator(req.body);
      if (error) throw joiValidationErrors(error);
      const response = await TransferService.createTransferService(req.body);
      res.status(200).json({
        message: response,
      });
    } catch (error) {
      logger.info(`${error} on the controller`);
      res.status(error.status).json({
        message: error.message,
      });
    }
  }
}
module.exports = TransactionController;
