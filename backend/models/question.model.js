const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  ques_type: { type: String, required: true },
  ans: { type: String, required: true },
  options: { type: Array,required:false},
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;