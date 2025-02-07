require('dotenv').config();
require('./connection/conection');
const cors = require('cors');
const express = require('express');
const app = express();
const user_routes = require('./user/routes');
const product_routes = require('./client/products/routes');
const order_routes = require('./client/orders/routes');
const comments_routes = require('./client/comments/route');
const admin_products_routes = require('./admin/products/routes');
const admin_orders_routes = require('./admin/orders/routes');
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Optional: Add specific configuration for CORS
const corsOptions = {
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
};
  
app.use(cors(corsOptions));
app.use('/user' , user_routes);
app.use('/product' , product_routes);
app.use('/order' , order_routes);
app.use('/comments' , comments_routes);
app.use('/admin/product' , admin_products_routes);
app.use('/admin/orders' , admin_orders_routes );

// Export app for server.js
app.listen( process.env.PORT , () => console.log(`Server Started ${process.env.PORT}`));







