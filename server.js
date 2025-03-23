require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://anh:AI15ebWHfTUKU3Gp@backenddb.15mch.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

mongoose.connect(uri)
    .then(() => console.log("✅ Kết nối MongoDB thành công!"))
    .catch(err => console.error("❌ Lỗi kết nối MongoDB:", err));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});

const restaurantRoutes = require("./routes/restaurantRoutes");
// const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const userRoutes = require("./routes/userRoutes");

const commentsRoute = require("./routes/commentRoutes");

app.use("/api/restaurants", restaurantRoutes);
// app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use("/api/users", userRoutes);

app.use("/api/comments", commentsRoute);
