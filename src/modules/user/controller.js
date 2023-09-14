const { default: UserService } = require("./service");

// class UserController {
    const signup = async (req, res) =>{
        try {
            const {firstName, lastName, email, password} = req.body;
            console.log(req.body);
            let user = await UserService.store(firstName, lastName, email, password);

            console.log("data");
            return user;
        } catch (error) {
            return error
        }
    }
// }

module.exports = {
    signup
};