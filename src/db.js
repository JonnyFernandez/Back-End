const { Sequelize } = require('sequelize')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')
require('dotenv').config()





const database = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.LOCALHOST}/${process.env.DATABASE}`, { logging: false });

UserModel(database);
PostModel(database);

console.log(database.models);







module.exports = {
    database,
    ...database.models
}