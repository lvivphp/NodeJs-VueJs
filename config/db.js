var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
mongoose.connection.on("error", console.error.bind(console, "connection error"));
mongoose.connection.once("open", function(callback){
  console.log("Connection succeeded");
});

module.exports = mongoose;