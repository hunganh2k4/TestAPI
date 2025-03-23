const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageResId: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    soldQuantity: { type: Number, default: 0 },
    productList: [{
        name: { type: String, required: true },
        price: { type: Number, required: true },
        imageResId: { type: Number, required: true },
        description: { type: String },
        rating: { type: Number, default: 0 },
        soldQuantity: { type: Number, default: 0 }
    }]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
