const { Thoughts } = require("../models");

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // get a single thought by id
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.id })
    .select("__v")
    .then((thought) => 
        !thought
            ? res.status(404).json({ message: "No thought with that ID "})
            :res.json(thought)
    )
    .catch((err) => res.status(500).json(err))
  },
  // create a new thought

  // update a thought by id

  // delete a thought by id

  // create a new reaction

  // delete a reaction by reaction ID
};
