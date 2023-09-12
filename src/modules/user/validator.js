const { param, body } = require('express-validator');
const { BaseValidator } = require('../../common');
const {isStrongPassword} = require('../../utils');

class UsersValidator extends BaseValidator {
  static validateSignUpForm() {
    return [
      body("firstname")
        .isLength({ min: 2 })
        .withMessage("First name must be minimum of two characters"),
      body("lastname")
        .isLength({ min: 2 })
        .withMessage("Last name must be minimum of two characters"),
      body("email").isEmail().withMessage("Invalid email format"),
    //   body("phone")
    //     .isLength({ min: 10 })
    //     .withMessage("Phone number must be at least 10 digits")
    //     .isNumeric()
    //     .withMessage("Phone number must be digits only."),
    //   body("dob").isDate().withMessage("Invalid date format"),
    //   body("pin")
    //     .isInt()
    //     .isLength({ max: 4, min: 4 })
    //     .withMessage("Your transaction pin is missing"),
      body("password")
        .isString()
        .withMessage("Provide a valid password")
        .custom((value) => isStrongPassword(value))
        .withMessage("password is not strong enough."),
    //   body("country").isString().withMessage("Provide a valid country"),
    //   body("gender").isString().withMessage("Provide a valid gender"),
    //   body("telephoneCode")
    //     .isString()
    //     .withMessage("Provide a valid phone code"),
    //   body("username").isString().withMessage("Provide a valid username"),
    //   body("platform").isString().withMessage("Provide a device platform"),
    //   body("imei").isString().withMessage("Provide a device imei"),
    //   body("deviceType").isString().withMessage("Provide a device type"),
    //   body("deviceManufacturer")
    //     .isString()
    //     .withMessage("Provide a device manufacturer"),
    //   body("deviceModel").isString().withMessage("Provide a device model"),
    //   body("deviceIP").isString().withMessage("Provide a device IP"),
    //   body("deviceName").isString().withMessage("Provide a device name"),
    ];
  }

  static validateTokenVerificationForm() {
    return [
      body('email').isEmail().withMessage('Provide a valid email'),
      body('token')
        .isInt()
        .isLength({ min: 6, max: 6 })
        .withMessage('Provide a valid token'),
    ];
  }

  static validateLoginForm() {
    return [
      body('username')
        .isString()
        .withMessage('Provide a valid username or email'),
      body('password').isString().withMessage('Provide a valid password'),
      body('platform').isString().withMessage('Provide a device platform'),
      body('imei').isString().withMessage('Provide a device imei'),
      body('deviceType').isString().withMessage('Provide a device type'),
      body('deviceManufacturer')
        .isString()
        .withMessage('Provide a device manufacturer'),
      body('deviceModel').isString().withMessage('Provide a device model'),
      body('deviceIP').isString().withMessage('Provide a device IP'),
      body('deviceName').isString().withMessage('Provide a device name'),
    ];
  }

  static validateAdminLoginForm() {
    return [
      body('usernameOrEmail')
        .isString()
        .withMessage('Provide a valid username or email'),
      body('password').isString().withMessage('Provide a valid password'),
    ];
  }

  static validateResendOtpForm() {
    return [body('medium').isString().withMessage('Invalid medium')];
  }

  static validateResetPasswordForm() {
    return [
      body('email').isEmail().withMessage('Provide an email'),
      body('password').isString().withMessage('Provide a password'),
      body('otp').isString().withMessage('Provide an otp'),
      // body('confirmPassword').isString().withMessage('Provide an email'),
    ];
  }

  static validateSecurityForm() {
    return [
      body('email').isString().withMessage('Provide an email'),
      body('question').isString().withMessage('Provide a question'),
      body('answer').isString().withMessage('Provide an answer'),
      // body('confirmPassword').isString().withMessage('Provide an email'),
    ];
  }

  static validateSecurityQuestions() {
    return [
      body('securityQuestions')
        .isArray()
        .withMessage('Provide your security questions'),
      body('userId')
        .isLength({ min: 24, max: 24 })
        .withMessage('Provide a valid user ID'),
    ];
  }
}

module.exports = UsersValidator;
