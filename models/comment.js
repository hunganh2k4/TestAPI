const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    productId: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    userName: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);
