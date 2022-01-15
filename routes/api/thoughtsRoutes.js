const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    // updateThought,
    // deleteThought,
    // createReaction,
    // deleteReaction,
} = require('../../controllers/thoughtsController');

// api/thoughts/, GET AND POST THOUGHTS
router.route('/')
.get(getThoughts)

// api/thoughts/:id user id
router.route('/:id')
.post(createThought);

// api/thoughts/:thoughtid
router.route('/:thoughtId')
.get(getSingleThought);

module.exports = router;