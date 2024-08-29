const express = require("express");
const TransferController = require("../controller/transferController");

const transferRouter = express.Router();

transferRouter.post("/transfer", TransferController.transferCreateController);

module.exports = transferRouter;
