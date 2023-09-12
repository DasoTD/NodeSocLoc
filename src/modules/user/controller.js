const { default: UserService } = require("./service");

// class UserController {
    const signup = async (req, res) =>{
        try {
            const {firstName, lastName, email, password} = req.body;

            let user = await UserService.store(firstName, lastName, email, password);
            return user;
        } catch (error) {
            return error
        }
    }
// }

module.exports = {
    signup
};