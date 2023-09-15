const { Op } = require("sequelize");
const db = require("../../dd");
const doubbleDB = require("../../database")
const User = require("../../database/models/user") //db.User;
//require("../../../models/user");// db.User;

// (async () => {
//       try {
//         await doubbleDB.sync(); // Create tables if they don't exist
//         console.log('Database synced successfully.');
//       } catch (error) {
//         console.error('Error syncing database:', error);
//       }
//     })();

class UserService {
    static async store(firstName, lastName, email, role, password){
        console.log("dd");
        let user = await User.create({ firstName, lastName, email, password });
        return user;
    }

    static async users(){
        let user = await User.findAll();
        return user;
    }
}
module.exports= UserService;