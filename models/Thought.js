const { Schema, model } = require('mongoose');
// import moment module to format the timestamp 
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');
// thought schema
const thoughtSchema = new Schema(
  // thoughtText: A string field that represents the text of the thought. It is required and must be between 1 and 280 characters in length
  {
    thoughtText: {
      type: String,
      required: 'please leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },

    // username: A string field that represents the username of the user who created the thought. It is required.
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
