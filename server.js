const express = require('express');
const app = express();
const restaurantRoutes = require('./routes/restaurantRoutes'); // Import tuyến đường
const productRoutes = require('./routes/productRoutes'); // Import tuyến đường

const userRoutes = require('./routes/userRoutes'); 

app.use('/restaurants', restaurantRoutes); // Gây lỗi nếu restaurantRoutes không phải middleware
app.use('/products', productRoutes); // Gây lỗi nếu productRoutes không phải middleware
app.use('/users', userRoutes); // Sử dụng userRoutes
app.get("/",(req,res)=>{
    res.send("Hello World!");  
 });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
