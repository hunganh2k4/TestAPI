const db = require('../config/db');

class Restaurant {
    static getAll(callback) {
        db.query('SELECT * FROM restaurants', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM restaurants WHERE id = ?', [id], callback);
    }

    static getProductsByRestaurant(id, callback) {
        db.query(
            'SELECT * FROM products WHERE restaurant_id = ?',
            [id],
            callback
        );
    }
}

module.exports = Restaurant;
