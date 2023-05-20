const { Sequelize } = require('sequelize')
const UserModel = require('./models/User')
const PostModel = require('./models/Post')

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, )
const DB_PASSWORD = "systel21";
const DB_USER = "postgres"


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/demo`, { logging: false });

UserModel(database)
PostModel(database)

console.log(database.models);







module.exports = {
    database,
    ...database.models
}