const { Schema, model } = require('mongoose');

const classSchema = new Schema({
  class_name: {
    type: String,
    required: true,
  },
  syllabus: {
    type: String,
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  assignment: [{
    type: Schema.Types.ObjectId,
    ref: "Assignment"
  }]
});

const Class = model('Class', classSchema);

module.exports = Class;
