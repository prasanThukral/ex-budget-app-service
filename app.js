const express = require("express");
require("dotenv").config();
const bodyparser = require("body-parser");

const app = express();
const userRouter = require("./routes/userRoutes");
const budgetRouter = require("./routes/budgetRoutes");
const transferRouter = require("./routes/transactionRoutes");

app.use(bodyparser.json());
app.use(userRouter);
app.use(budgetRouter);
app.use(transferRouter);
// app.use("/",(req,res)=>res.status(200).json({tip: "tip"}))
const port = process.env.PORT;
app.listen(port, () => console.log(`app is listed on the port => ${port} `));
