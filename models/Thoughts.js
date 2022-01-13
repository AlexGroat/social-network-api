const { Schema, model, Types } = require("mongoose");
const moment = require('moment');
const Reactions = require("./Reactions");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            // use moment to format the date and time the thought was created
            get: (createdTime) => moment(createdTime).format('LLLL')
        },

        username: {
            type: String,
            required: true
        },

        reactions: [Reactions]
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },

        id: false
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;
