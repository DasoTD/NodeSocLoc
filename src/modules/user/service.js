const db = require("../../database/models");
const User = db.User;
//require("../../../models/user");// db.User;

class UserService {
    static async store(firstName, lastName, email, password){
        let user = await User.create({ firstName, lastName, email, password });
        return user;
    }

    static async users(){
        let user = await User.findAll();
        return user;
    }
}
module.exports= UserService;