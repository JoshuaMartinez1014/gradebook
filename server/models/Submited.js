const { Schema, model, models } = require("mongoose");

const submitedSchema = new Schema({
  submited: {
    type: String,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  assignment: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Assignment",
  },
  isGraded: {
    type: Boolean,
    default: false
  }
});

const Submited = model("Submited", submitedSchema);

module.exports = Submited 