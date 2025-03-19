const Restaurant = require('../models/restaurantModel');

exports.getAllRestaurants = (req, res) => {
    Restaurant.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getRestaurantById = (req, res) => {
    Restaurant.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
};

exports.getProductsByRestaurant = (req, res) => {
    Restaurant.getProductsByRestaurant(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};