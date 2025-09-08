const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require("../middleware/auth");

// Create item (for admin/dev testing)
router.post("/", auth, async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read / list with filters: ?minPrice=&maxPrice=&category=&q=
router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    let filter = {};
    if (category) filter.category = category;
    if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
    const items = await Item.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get single
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put("/:id", auth, async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get distinct categories// Get distinct categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Item.distinct("category");
    if (!categories || categories.length === 0) {
      return res.json(["Electronics", "Clothing", "Footwear", "Accessories"]);
    }
    res.json(categories.sort());
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ error: true, message: "Error fetching categories" });
  }
});

module.exports = router;
