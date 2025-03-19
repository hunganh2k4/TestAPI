const db = require('../config/db');

class Product {
    static getAll(callback) {
        db.query('SELECT * FROM products', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM products WHERE id = ?', [id], callback);
    }
}

module.exports = Product;
