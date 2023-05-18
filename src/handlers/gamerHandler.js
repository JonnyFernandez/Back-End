const allGameCtrl = require('../controller/gameController/allGameCtrl')
const postGameCtrl = require('../controller/gameController/postGameCtrl')
const updateGameCtrl = require('../controller/gameController/updateGameCtrl')
const deleteGameCtrl = require('../controller/gameController/deleteGameCtrl')


const allGames = (req, res) => {
    try {
        let aux = allGameCtrl()
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

        






const postGame = (req,res)=>{
    try {
         let aux = postGameCtrl()
         res.status(200).json(aux)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }






const updateGame = (req,res)=>{
    try {
        
    let update = updateGameCtrl()
    res.status(200).json(update)    
         

    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}





const deleteGame = (req,res)=>{
    try {
        let deleteGame = deleteGameCtrl()
        res.status(200).json(deleteGame)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

module.exports ={allGames, postGame, updateGame, deleteGame}



