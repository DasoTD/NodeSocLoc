const express = require('express');
const router = express.Router();
const UserController = require("./controller");
const {handleRequest} = require("../../middlewares")
const AuthValidator = require("./validator")

router.post("/signup", 
// handleRequest, 
// AuthValidator.validateSignUpForm(),
// AuthValidator.validate,
UserController.signup
)
module.exports = router;