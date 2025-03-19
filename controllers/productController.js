const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    Product.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
};
