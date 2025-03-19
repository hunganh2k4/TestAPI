const User = require('../models/userModel');

// Lấy tất cả users
exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Lấy user theo ID
exports.getUserById = (req, res) => {
    User.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) {
            return res.status(404).json({ message: 'User không tồn tại' });
        }
        res.json(results[0]);
    });
};

// Thêm user mới
exports.createUser = (req, res) => {
    const { username, password, email, imageResId } = req.body;

    if (!username || !password || !email || !imageResId) {
        return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
    }

    User.create(username, password, email, imageResId, (err, userId) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: 'Thêm user thành công', userId });
    });
};