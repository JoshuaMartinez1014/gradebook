const { Schema, model } = require('mongoose');

const classSchema = new Schema({
  class_name: {
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
  }]
});

const Class = model('Class', classSchema);

module.exports = Class;
