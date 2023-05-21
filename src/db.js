const { Sequelize } = require('sequelize')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')
require('dotenv').config()

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, )
const DB_PASSWORD = "systel21";
const DB_USER = "postgres"


const database = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.LOCALHOST}/${process.env.DATABASE}`, { logging: false });

UserModel(database)
PostModel(database)

console.log(database.models);







module.exports = {
    database,
    ...database.models
}