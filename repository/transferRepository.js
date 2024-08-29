const transferModel = require("./models/transferModel");
const { logger } = require("../util/index");
const { ERROR_CODES, errorBuilder } = require("../error/index");

class TransferRepository {
  static async createTransfers(reqObject) {
    try {
      const createTransfers = await transferModel.create(reqObject);
      return createTransfers;
    } catch (error) {
      logger.info(
        `error at transferRepository of createTransfer ${error.message}`
      );
      const err = errorBuilder(ERROR_CODES.CREATE_TRANSFER_ERROR_REPO);
      throw err;
    }
  }

  static async getTransfers(transferId) {
    try {
      const createTransfers = await transferModel.findOne({
        transferId: transferId,
      });
      return createTransfers;
    } catch (error) {
      logger.info(
        `error at transferRepository of getTransfers ${error.message}`
      );
      const err = errorBuilder(ERROR_CODES.GET_TRANSFER_ERROR_ERROR);
      throw err;
    }
  }

  static async findLastTransaction() {
    try {
      const lastTransaction = await transferModel
        .findOne()
        .sort({ createdAt: -1 })
        .exec();
      return lastTransaction;
    } catch (error) {
      logger.info(`error coming from userSignInRepository ${error.message}`);
      const err = errorBuilder(ERROR_CODES.TRANSFER_LAST_ERROR_REPO);
      throw err;
    }
  }
}
module.exports = TransferRepository;
