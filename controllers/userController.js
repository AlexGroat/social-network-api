const { Users } = require("../models");

module.exports = {
  // get all users
  getUsers(req, res) {
    Users.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // get a user by ID
  getSingleUser(req, res) {
    Users.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

      // create a new user
      createUser(req, res) {
        Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
      },

  //     // update a single user by id
  //     updateUser(req, res) {

  //     },

  //     // delete a user by id
  //     deleteUser(req, res) {

  //     },

  //     // add a friend
  //     addFriend(req, res) {

  //     },

  //     // delete a friend
  //     deleteFriend(req, res) {

  //     }
};
