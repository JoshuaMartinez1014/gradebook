const { Schema, model } = require('mongoose');

const gradeSchema = new Schema({
  grade: {
    type: String,
    required: true,
    // The validator checks that the grade is A, B, C, D, or F
    validate: {
        validator: function (value) {
            const letterGrade = ["A", "B", "C", "D", "F"];
            return letterGrade.includes(value)
        },
        message: "That is an invalid letter"
    }
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
