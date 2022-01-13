const { Users } = require('../models');

module.exports ={
    // get all users
    getUsers(req, res) {
        Users.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    // get a user by ID
    getSingleUser(req, res) {
        Users.findOne({_id})
    },

    // create a new user
    createUser(req, res) {

    },

    // update a single user by id
    updateUser(req, res) {

    },

    // delete a user by id
    deleteUser(req, res) {
        
    }
}






