const { Schema, model } = require('mongoose');

const gradeSchema = new Schema({
  assignment_name: {
    type: String,
    required: true
  },
  grade: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Grade"
  },
  class: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Class"
  }
});

const Grade = model('Grade', gradeSchema);

module.exports = Grade;
