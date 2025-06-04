const db = require('../config/connection');
const { User, Grade, Class, Assignment, Submited } = require('../models');
const userSeed = require('./userSeed.json')
const classSeed = require('./classSeed.json')
const assignmentSeed = require('./assignmentSeed.json')
const gradeSeed = require('./gradeSeed.json')
const submitedSeed = require('./submitedSeed.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeed);
    await Class.deleteMany({});
    await Class.create(classSeed);
    await Assignment.deleteMany({});
    await Assignment.create(assignmentSeed);
    await Submited.deleteMany({});
    await Submited.create(submitedSeed);
    await Grade.deleteMany({});
    await Grade.create(gradeSeed);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});