const allUserCtrl = require('../controller/userController/allUserCtrl')
const postUserCtrl = require('../controller/userController/postUserCtrl')
const updateUserCtrl = require('../controller/userController/updateUserCtrl')
const deleteUserCtrl = require('../controller/userController/deleteUserCtrl')


const allUsers = (req, res) => {
    try {
        let aux = allUserCtrl()
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

        

const postUser = async (req,res)=>{
    const {name, email, phone, gender}=req.body;
    try {
         let aux = await postUserCtrl(name, email, gender, phone)
         res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }


    
const updateUser = (req,res)=>{
        try {
            
        let update = updateUserCtrl()
        res.status(200).json(update)    
             
    
        } catch (error) {
            res.status(400).json({error: error.message})
            
        }
    }
    

const deleteUser = (req,res)=>{
        try {
            let deleteGame = deleteUserCtrl()
            res.status(200).json(deleteGame)
        } catch (error) {
            res.status(400).json({error: error.message})
            
        }
    }
    
    module.exports ={allUsers, postUser, updateUser, deleteUser}







    






