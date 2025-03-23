const mongoose = require("mongoose");

const uri = "mongodb+srv://phanhunganh2004:CWhQEQr2biKIAEvV@backenddb.a66i1.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

async function connectDB() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("✅ Kết nối MongoDB thành công!");
    } catch (error) {
        console.error("❌ Lỗi kết nối MongoDB:", error);
    }
}

connectDB();
