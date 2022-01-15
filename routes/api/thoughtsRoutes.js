const router = require('express').Router();

const {
    getThoughts,
    // getSingleThought,
    // createThought,
    // updateThought,
    // deleteThought,
    // createReaction,
    // deleteReaction,
} = require('../../controllers/thoughtsController');

// api/thoughts/, GET AND POST THOUGHTS
router.route('/')
.get(getThoughts)

module.exports = router;