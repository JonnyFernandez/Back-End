const { Router } = require('express')
const {allGames, postGame, updateGame, deleteGame} = require('../handlers/gamerHandler')

const gamerR = Router()

gamerR.use((req,res,next)=>{
    console.log('reques to allGames provando middleware');
    next()  
})
gamerR.get('/', allGames)


gamerR.post('/', postGame)

gamerR.put('/', updateGame)

gamerR.delete('/', deleteGame)











module.exports = gamerR;