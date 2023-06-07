const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/gradebook",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

/*
Create account on Mongo Atlas 
Create project 
Create a new database
  Connect to Database
    First option is the one you want
    You will see a connection string 

     mongodb://ugyggwdwdgy.user@<password>uscgugcuhcuehueg

  Go to Heroku dashboard -> Settings -> Config Vars 
  Add a new var named MONGODB_URI and give it the value of the connection string



*/
