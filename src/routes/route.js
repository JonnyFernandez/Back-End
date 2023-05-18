const { Router } = require('express')
const gamerR = require('./gamerRoute')
const playerR = require('./playerRoute')


const route = Router()


route.use('/gamer', gamerR)
route.use('/player', playerR)





module.exports = route;