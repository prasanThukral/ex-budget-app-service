const express = require("express");
const UserController = require("../controller/userController");

const userRouter = express.Router();

// userRouter.use("*", async (req, res) => {
//   res.status(200).json({ tip: "router" });
// });

userRouter.post("/signIn", UserController.userSignInController);
userRouter.post("/signUp", UserController.userSignUpController);
module.exports = userRouter;
