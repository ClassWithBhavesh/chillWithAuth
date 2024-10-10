const express = require("express");
const userRouter = express.Router();
const {userSignUp, usersignIn} = require("../Controllers/usercontroller.js");

userRouter.get("/signup", (req, res) => {
    res.send("Sign up route!");
})

userRouter.post("/signup", userSignUp);

userRouter.get("/signin", (req, res) => {
    res.send("sign in route!");
})

userRouter.post("/signin", usersignIn);


module.exports = userRouter;
