const { User } = require('../../db')



const getByName = async (name) => {

    const allUser = await User.findAll()

    const filt = allUser.filter(item => item.name === name)

    return filt

}



const allUserCtrl = async () => {
    const aux = await User.findAll()
    
    if(aux.length<1){
        return "empty database"
        
    }else{
        return aux
    }
    
    
    

}


const userbyId = async (id) => {
    const aux = await User.findByPk(id)

    if(!aux) throw new Error('Id not found')

    return aux;
}



module.exports = { allUserCtrl, getByName, userbyId }