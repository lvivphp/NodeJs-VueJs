var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotdog', { useNewUrlParser: true });
mongoose.connection.on("error", console.error.bind(console, "connection error"));
mongoose.connection.once("open", function(callback){
  console.log("Connection succeeded");
});

module.exports = mongoose;