const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageResId: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    soldQuantity: { type: Number, default: 0 },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
});

module.exports = mongoose.model("Product", productSchema);
