const express = require("express");
const http = require("http");
const { Server } = require('socket.io');
const {join} = require('node:path');
const appRoutes = require("./src/routes");
const doubbleDB = require("./src/database/index");
const {User, Geolocation} = require('./association');


let App = express()
let Port = 9791

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
  });
App.use("/api/v1", appRoutes);

const httpServerr = http.createServer(App)

const io = new Server(httpServerr)

// io.use((socket, next) => {
//   if (socket.handshake.headers.auth) {
//     const { auth } = socket.handshake.headers;
//     const token = auth.split(" ")[1];
//     jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
//       if (err) {
//         throw new Error("Authentication error, Invalid Token supplied");
//       }
//       const theUser = await db.User.findByPk(decodedToken.id);
//       if (!theUser)
//         throw new Error(
//           "Invalid Email or Password, Kindly contact the admin if this is an anomaly"
//         );
//       socket.theUser = theUser;
//       return next();
//     });
//   } else {
//     throw new Error("Authentication error, Please provide a token");
//   }
// });

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id)
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      });
  });
  
httpServerr.listen(Port, () => {
console.log(`server running at http://localhost:${Port}`);
}); 

// const sequelize = require('./config');
// const User = require('./models/User');
// const Geolocation = require('./models/Geolocation');

//Test DB
// doubbleDB.authenticate()
// .then(() => console.log('db connected...'))
// .catch(err => console.log(err))

(async () => {
  try {
    await doubbleDB.sync({ alter: true }); // Create tables if they don't exist
    console.log('Database synced successfully.');
    // const newUser = await User.create({
    //   firstName: 'DAVID',
    //   lastName: 'DAD',
    //   email: 'TD@example.com',
    //   // role: 'DD',
    //   password: "KNXVNC KJZDV"
    // });

    // const newGeo = await Geolocation.create({
    //   id: newUser.id,
    //   socketID: 'DAVID',
    //   location: 'DAD',
    //   // online: true,
    //   // trackerID: newUser.id,
    //   // password: "KNXVNC KJZDV" 
    // });

    // console.log('New user created:', newUser.toJSON());
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();
