const { allUserCtrl, getByName, userbyId } = require('../controller/userController/allUserCtrl')
const postUserCtrl = require('../controller/userController/postUserCtrl')
const updateUserCtrl = require('../controller/userController/updateUserCtrl')
const deleteUserCtrl = require('../controller/userController/deleteUserCtrl')


const allUsers = async (req, res) => {
    const { name } = req.query;
    
    // if (![name].every(Boolean)) return res.status(404).send('Flata enviardatos obligatorios')
    
    try {
        const source = name ? await getByName(name) : await allUserCtrl()

        res.status(200).json(source)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};


const getById = async (req, res)=>{
    const { id } = req.params;
    try {
        const sourceId = id? await userbyId(id): await allUserCtrl()
        res.status(200).json(sourceId)
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
}


const postUser = async (req, res) => {
    const { name, email, phone, gender } = req.body;
    try {
        let aux = await postUserCtrl(name, email, gender, phone)
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    console.log(id, name, email);
    try {
        let update = await updateUserCtrl(name, email, id)
        res.status(200).json(update)


    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {

        let deleteGame = await deleteUserCtrl(id)

        res.status(200).json(deleteGame)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }
}

module.exports = { allUsers, postUser, updateUser, deleteUser,getById }














