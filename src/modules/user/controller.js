const UserService  = require("./service");

class UserController {
    static async signup (req, res){
        try {
            const {firstName, lastName, email, password} = req.body;
            let user = await UserService.store(firstName, lastName, email,  password);

            res.status(201).send({
                success: true,
                message: "user successfully created",
                user,
              });
        } catch (error) {
            return error
        }
    }
};

module.exports = UserController