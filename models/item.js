var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    user: {id: Schema.ObjectId, username: String},
    price: Number,
    status: String,
    artist: String,
    itemType: String,
    description: String,
    image: Buffer
});
var Item = mongoose.model('Item', itemSchema);
module.exports = Item;