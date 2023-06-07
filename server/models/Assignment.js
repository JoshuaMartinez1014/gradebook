const { Schema, model } = require('mongoose');

const assignmentSchema = new Schema({
  assignment_name: {
    type: String,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  class: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Class"
  }
});

const Assignment = model('Assignment', assignmentSchema);

module.exports = Assignment;
