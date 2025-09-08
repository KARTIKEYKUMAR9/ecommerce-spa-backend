const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');


// Get current user's cart
router.get('/', auth, async (req, res) => {
try {
const user = await User.findById(req.user.id).populate('cart.item');
res.json(user.cart);
} catch (err) { res.status(500).json({ message: err.message }); }
});


// Add item to cart { itemId, quantity }
router.post('/add', auth, async (req, res) => {
const { itemId, quantity = 1 } = req.body;
try {
const user = await User.findById(req.user.id);
const existing = user.cart.find(ci => ci.item?.toString() === itemId);
if (existing) {
existing.quantity += quantity;
} else {
user.cart.push({ item: itemId, quantity });
}
await user.save();
await user.populate('cart.item');
res.json(user.cart);
} catch (err) { res.status(500).json({ message: err.message }); }
});


// Remove item from cart { itemId }
router.post('/remove', auth, async (req, res) => {
const { itemId } = req.body;
try {
const user = await User.findById(req.user.id);
user.cart = user.cart.filter(ci => ci.item?.toString() !== itemId);
await user.save();
await user.populate('cart.item');
res.json(user.cart);
} catch (err) { res.status(500).json({ message: err.message }); }
});


// Clear cart
router.post('/clear', auth, async (req, res) => {
try {
const user = await User.findById(req.user.id);
user.cart = [];
await user.save();
res.json([]);
} catch (err) { res.status(500).json({ message: err.message }); }
});


module.exports = router;