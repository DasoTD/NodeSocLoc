// associations.js
const User = require('./models/User');
const Geolocation = require('./models/Geolocation');
// const sequelize = require('./config'); // Import your Sequelize instance

// Define associations here
User.hasMany(Geolocation, { foreignKey: 'UserId' });
Geolocation.belongsTo(User, { foreignKey: 'UserId' });

// Export the models
module.exports = {
  User,
  Geolocation,
};
