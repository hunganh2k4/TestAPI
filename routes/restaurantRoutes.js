const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// 📌 Lấy danh sách nhà hàng
router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi lấy danh sách nhà hàng!" });
    }
});

// 📌 Lấy thông tin nhà hàng theo ID
router.get("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: "Không tìm thấy nhà hàng!" });
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi lấy nhà hàng!" });
    }
});

// 📌 Thêm nhà hàng mới
router.post("/", async (req, res) => {
    try {
        const { name, imageResId, rating, soldQuantity, productList } = req.body;
        const restaurant = new Restaurant({ name, imageResId, rating, soldQuantity, productList });
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: "Dữ liệu không hợp lệ!" });
    }
});

// 📌 Cập nhật thông tin nhà hàng
router.put("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) return res.status(404).json({ message: "Không tìm thấy nhà hàng để cập nhật!" });
        res.json(restaurant);
    } catch (err) {
        res.status(400).json({ error: "Dữ liệu cập nhật không hợp lệ!" });
    }
});

// 📌 Xóa nhà hàng
router.delete("/:id", async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!deletedRestaurant) return res.status(404).json({ message: "Không tìm thấy nhà hàng để xóa!" });
        res.json({ message: "Đã xóa nhà hàng thành công!" });
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi xóa nhà hàng!" });
    }
});

// 📌 Lấy danh sách sản phẩm của nhà hàng
router.get("/:id/products", async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: "Không tìm thấy nhà hàng!" });
        res.json(restaurant.productList);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi lấy sản phẩm của nhà hàng!" });
    }
});

module.exports = router;
