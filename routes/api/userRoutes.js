const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    // updateUser,
    // deleteUser,
    // addfriend,
    // deletefriend,
} = require('../../controllers/userController');

// api/users, GET AND POST USERS
router.route('/').get(getUsers).post(createUser);

// api/users/:id
router.route('/:id').get(getSingleUser);

module.exports = router;

