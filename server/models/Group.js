const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const groupSchema = new Schema(
  {
    groupName: {
      type: String,
      required: 'You need to have a Group Name!',
      unique: true,
      trim: true
    },
    groupColor: {
      type: String,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Group = model('group', groupSchema);

module.exports = Group;
