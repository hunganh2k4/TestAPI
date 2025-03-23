const express = require("express");
const router = express.Router();
const Comment = require("../models/comment.js");

// 📌 Tạo comment mới
router.post("/", async (req, res) => {
    try {
        const { content, productId, rating, userName } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!content || !productId || !rating || !userName) {
            return res.status(400).json({ error: "Dữ liệu không hợp lệ!" });
        }

        const comment = new Comment({ content, productId, rating, userName });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi tạo bình luận!" });
    }
});

// 📌 Lấy tất cả bình luận của một sản phẩm
router.get("/:productId", async (req, res) => {
    try {
        const comments = await Comment.find({ productId: req.params.productId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server khi lấy bình luận!" });
    }
});

module.exports = router;
