const { Router } = require('express')
const {allUsers, postUser, updateUser, deleteUser,getById} = require('../handlers/gamerHandler')

const user = Router()

user.use((req,res,next)=>{
    console.log('pasando por la ruta <<user>> ');
    next()  
})
user.get('/', allUsers)

user.get('/:id', getById)

user.post('/', postUser)

user.put('/', updateUser)

user.delete('/', deleteUser)











module.exports = user;