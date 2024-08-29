const { mongoose } = require("./dbConnector");

const transferSchema = new mongoose.Schema(
  {
    transferId: {
      type: Number,
      unique: true,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    budgetId: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    memo: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
const transferModel = mongoose.model("transfers", transferSchema);
module.exports = transferModel;
