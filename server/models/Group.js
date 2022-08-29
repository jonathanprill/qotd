const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const groupSchema = new Schema(
  {
    groupName: {
      type: String,
      required: 'You need to have a Group Name!',
      minlength: 1,
      maxlength: 50
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    question: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      }
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Group = model('group', groupSchema);

module.exports = Group;
