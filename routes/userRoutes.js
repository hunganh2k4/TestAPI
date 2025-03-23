const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// Lấy danh sách tất cả người dùng
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lấy thông tin người dùng theo ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "Không tìm thấy người dùng!" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Đăng ký người dùng mới
router.post("/", async (req, res) => {
    const { username, email, password, avatar } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin!" });
    }

    try {
        const newUser = new User({ username, email, password, avatar });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Cập nhật thông tin người dùng
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: "Không tìm thấy người dùng!" });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Xóa người dùng
router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "Không tìm thấy người dùng!" });
        res.json({ message: "Xóa thành công!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
