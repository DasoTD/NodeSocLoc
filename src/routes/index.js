const express = require("express");
const AuthRouter = require("../modules/user/router");

module.exports = {
    AuthRouter
}

const app = express();

app.use('/auth', AuthRouter);


module.exports = app;