const express = require("express");
const router = express.Router();
const Order = require("../models/order.js");

// 📌 Lấy danh sách tất cả đơn hàng
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi lấy danh sách đơn hàng!" });
    }
});

// 📌 Lấy chi tiết đơn hàng theo ID
router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Không tìm thấy đơn hàng!" });
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi lấy đơn hàng!" });
    }
});

// 📌 Tạo đơn hàng mới
router.post("/", async (req, res) => {
    try {
        const { date, items, userId, totalPrice } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!date || !items || !userId || totalPrice === undefined) {
            return res.status(400).json({ error: "Dữ liệu không hợp lệ!" });
        }

        const order = new Order({ date, items, userId, totalPrice });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: "Dữ liệu không hợp lệ!" });
    }
});

// 📌 Cập nhật đơn hàng (ví dụ: cập nhật trạng thái, tổng giá)
router.put("/:id", async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ message: "Không tìm thấy đơn hàng để cập nhật!" });
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ error: "Dữ liệu cập nhật không hợp lệ!" });
    }
});

// 📌 Xóa đơn hàng
router.delete("/:id", async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: "Không tìm thấy đơn hàng để xóa!" });
        res.json({ message: "Đã xóa đơn hàng thành công!" });
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi xóa đơn hàng!" });
    }
});

module.exports = router;
