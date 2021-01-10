var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change db with the curent one
mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false");

module.exports = {mongoose};
