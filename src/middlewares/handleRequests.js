const { createResponse, HttpStatusCode, ResponseStatus } = require("../common");
const { decryptRequest } = require("../utils");

require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    let decrypt = null;
    const { data } = req.body;

    if (!data) {
      return createResponse(
        res,
        HttpStatusCode.StatusUnprocessableEntity,
        ResponseStatus.Failure,
        "Body request is missing"
      );
    }
    decrypt = await decryptRequest(data);
    req.body = JSON.parse(decrypt);
    next();
  } catch (error) {
    return createResponse(
      res,
      HttpStatusCode.StatusInternalServerError,
      ResponseStatus.Error,
      error.message
    );
  }
};
