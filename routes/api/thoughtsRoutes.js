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
.post(createThought);

// api/thoughts/:id
router.route('/:id')
.get(getSingleThought);

module.exports = router;