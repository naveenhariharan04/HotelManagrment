const { Sequelize } = require('sequelize');
require('dotenv').config();  // Load environment variables from .env

// Create a connection to the MySQL database
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name from .env
  process.env.DB_USER,     // MySQL username from .env
  process.env.DB_PASSWORD, // MySQL password from .env
  {
    host: process.env.DB_HOST,  // Database host (localhost)
    dialect: 'mysql',           // MySQL dialect
  }
);

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;  // Export the sequelize instance for use in models
