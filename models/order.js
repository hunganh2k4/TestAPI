const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    date: { type: String, required: true }, // Ngày đặt hàng
    totalPrice: { type: Number, required: true }, // Tổng giá của đơn hàng
    items: [
        {
            productImage: { type: Number, required: true }, // Hình ảnh sản phẩm
            productName: { type: String, required: true }, // Tên sản phẩm
            quantity: { type: Number, required: true }, // Số lượng
            price: { type: Number, required: true } // Giá của từng sản phẩm (không tổng)
        }
    ],
    userId: { type: String, required: true } // ID người dùng đặt hàng
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;