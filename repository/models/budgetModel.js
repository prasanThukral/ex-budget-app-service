const { mongoose } = require("./dbConnector");

const budgetSchema = mongoose.Schema(
  {
    budgetId: {
      type: Number,
      unique: true,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    transactions: {
      type: Array,
    },
    budgetStartedOn: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    spent: {
      type: Number,
      required: true,
    },
    lastTransfer: {
      day: {
        type: Date,
        required: true,
      },
      amount: {
        type: Date,
      },
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
const budgetModel = mongoose.model("budgets", budgetSchema);
module.exports = budgetModel;
