const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema  = new Schema(
    {
        // set ID for reaction
        reactionId: {
            type: Schema.Types.ObjectId,
            default: ()=> new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            // use moment to format the date and time the thought was created
            get: (createdTime) => moment(createdTime).format('LLLL')
        }
    },

    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = reactionSchema;