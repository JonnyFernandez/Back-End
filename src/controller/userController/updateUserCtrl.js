const { User } = require('../../db')

const updateUserCtrl =  (name, email, id) => {
    if (![]) throw new Error('Provando fallo en update')
    return ('this is the controller to updateGame')




    // let aux = // Change everyone without a last name to "Doe"
    //     await User.update({ id: id }, {
    //         where: {
    //             name: name,
    //             email: email
    //         }
    //     });

   return aux;     
}

module.exports = updateUserCtrl;