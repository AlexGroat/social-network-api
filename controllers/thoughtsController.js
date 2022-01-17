const { Thoughts, Users } = require("../models");

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // get a single thought by id
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new thought
  createThought({ params, body }, res) {
    console.log(params);
    console.log(body);
    // console log user id and the content of the thought json
    Thoughts.create(body)
      // find the id of the user and push a new thought into the user thoughts array
      .then(({ _id }) => {
        return Users.findOneAndUpdate(
          { _id: params.id },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((newThought) =>
        !newThought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(newThought)
      )
      .catch((err) => res.json(err));
  },

  // update a thought by id
  updateThought(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete a thought by id
  deleteThought(req, res) {
    Thoughts.findByIdAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this ID" })
          : res.json({ message: "thought has been removed" })
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new reaction

  // delete a reaction by reaction ID
};
