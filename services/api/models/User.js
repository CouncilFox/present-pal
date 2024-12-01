// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure usernames are unique
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure emails are unique
    validate: {
      isEmail: true, // Validates format of the email
    },
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options
  tableName: 'users',
  timestamps: true, // Adds createdAt and updatedAt
});

module.exports = User;
