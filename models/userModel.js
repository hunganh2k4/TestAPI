// const db = require('../config/db');

// class User {
//     // Lấy danh sách tất cả users
//     static getAll(callback) {
//         db.query('SELECT * FROM users', callback);
//     }

//     // Lấy user theo ID
//     static getById(id, callback) {
//         db.query('SELECT * FROM users WHERE id = ?', [id], callback);
//     }

//     // Thêm user mới
//     static create(username, password, email, imageResId, callback) {
//         db.query(
//             'INSERT INTO users (id, username, password, email, imageResId) VALUES (UUID(), ?, ?, ?, ?)',
//             [username, password, email, imageResId],
//             (err, result) => {
//                 if (err) return callback(err, null);
//                 callback(null, result.insertId);
//             }
//         );
//     }
// }

// module.exports = User;
