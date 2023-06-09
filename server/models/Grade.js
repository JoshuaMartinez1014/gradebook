const { Schema, model } = require('mongoose');

const gradeSchema = new Schema({
  grade: {
    type: Number,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  assignment: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Assignment"
  }
});

const Grade = model('Grade', gradeSchema);

module.exports = Grade;
// module.exports = models.Grade ||  model('Grade', gradeSchema);
