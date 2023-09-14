const express = require('express');
const router = express.Router();
const {  signup } = require("./controller");
const {handleRequest} = require("../../middlewares")
const AuthValidator = require("./validator")

router.post("/signup", 
// handleRequest, 
// AuthValidator.validateSignUpForm(),
// AuthValidator.validate,
signup
)

// export default router;
module.exports = router;