const { Schema, model } = require('mongoose');

const assignmentSchema = new Schema({
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

const Assignment = model('Assignment', assignmentSchema);

module.exports = Assignment;
