const { Router } = require('express')
const user = require('./gamerRoute')
const playerR = require('./playerRoute')


const route = Router()


route.use('/user', user)
route.use('/post', playerR)





module.exports = route;