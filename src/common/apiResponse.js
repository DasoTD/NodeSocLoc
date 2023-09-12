const { env, APP_NAME } = require("../config");
const { encryptResponse } = require("../utils");
const { responseLogger, adminResponseLogger } = require("./logger");

const HttpStatusCode = {
  StatusOk: 200,
  StatusCreated: 201,
  StatusBadRequest: 400,
  StatusUnauthorized: 401,
  StatusNotFound: 404,
  StatusUnprocessableEntity: 422,
  StatusInternalServerError: 500,
};

const ResponseStatus = {
  Success: "success",
  Failure: "fail",
  Error: "error",
};

const ResponseMessage = {
  HealthCheckMessage:  `Welcome to the ${APP_NAME} Server!`,
  NotFoundMessage: "Not Found!",
};

/**
 * Builds, logs, and sends the response.
 *
 * @param {Response} res
 * @param {Number} httpStatusCode the status code
 * @param {String} responseStatus indicates if request was successful or not
 * @param {Object} data the data to be sent over
 */
const createResponse = async (res, httpStatusCode, responseStatus, data) => {
  let responseObject;

  if (
    responseStatus === ResponseStatus.Error ||
    responseStatus === ResponseStatus.Failure
  ) {
    responseObject = {
      status: responseStatus,
      message: data,
    };

    responseLogger(module).error(JSON.stringify(responseObject));
  } else {
    responseObject = {
      status: responseStatus,
      data,
    };

    // logger(module).info(JSON.stringify(responseObject));
  }
  if (env === "development") console.log(JSON.stringify(responseObject));
  const response = await encryptResponse(JSON.stringify(responseObject));
  return res.status(httpStatusCode).json({ response });
};

const createAdminResponse = async (
  res,
  httpStatusCode,
  responseStatus,
  data
) => {
  let responseObject;

  if (
    responseStatus === ResponseStatus.Error ||
    responseStatus === ResponseStatus.Failure
  ) {
    responseObject = {
      status: responseStatus,
      message: data,
    };

    adminResponseLogger(module).error(JSON.stringify(responseObject));
  } else {
    responseObject = {
      status: responseStatus,
      data,
    };

    // logger(module).info(JSON.stringify(responseObject));
  }
  if (env === "development") console.log(JSON.stringify(responseObject));
  const response = await encryptResponse(JSON.stringify(responseObject));
  return res.status(httpStatusCode).json({ response });
};

module.exports = {
  HttpStatusCode,
  ResponseStatus,
  ResponseMessage,
  createResponse,
  createAdminResponse,
};
