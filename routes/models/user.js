var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    name: String,
    username: String,
    password: String,
    description: String,
    image: Buffer
});
var User = mongoose.model('User', userSchema);
module.exports = User;