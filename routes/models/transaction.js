var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    buyer: {id: Schema.ObjectId, username: String},
    seller: {id: Schema.ObjectId, username: String},
    item: {id: Schema.ObjectId, name: String, price: Number, description: String},
    recipient: String,
    address: String,
    notes: String
});
var Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;