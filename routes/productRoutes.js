const express = require("express");
const router = express.Router();
const Product = require("../models/product.js");

// Lấy danh sách sản phẩm
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().populate("restaurant");
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lấy sản phẩm theo ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("restaurant");
        if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Thêm mới sản phẩm
router.post("/", async (req, res) => {
    try {
        const { name, price, imageResId, description, rating, soldQuantity, restaurant } = req.body;
        const product = new Product({ name, price, imageResId, description, rating, soldQuantity, restaurant });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Cập nhật sản phẩm
router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Xóa sản phẩm
router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Đã xóa sản phẩm" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
