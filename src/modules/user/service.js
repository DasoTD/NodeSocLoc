// const db = require("../../models");

class UserService {
    static async store(firstName, lastName, email, password){
        let user = await db.User.create({ firstName, lastName, email, password });
        return user;
    }

    static async users(){
        let user = await db.User.findAll();
        return user;
    }
}
module.exports= UserService;