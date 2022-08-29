const { Schema, model } = require('mongoose');
const answerSchema = require('./Answer');

const questionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: 'You need to have a question!',
      minlength: 1,
      maxlength: 280
    },
    answers: [answerSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Question = model('Question', questionSchema);

module.exports = Question;
