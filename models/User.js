const mongoose = require('mongoose');


const CartItemSchema = new mongoose.Schema({
item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
quantity: { type: Number, default: 1 }
});


const UserSchema = new mongoose.Schema({
name: String,
email: { type: String, unique: true },
password: String,
cart: [CartItemSchema]
});


module.exports = mongoose.model('User', UserSchema);