require('dotenv').config();
const connectDB = require('./DB/connect')
const Product = require('./models/product')

const ProductJson = require('./products.json')

const start = async () =>{
    try {
       await connectDB(process.env.MONGODB_URL);
       await Product.create(ProductJson);
       console.log("Success");
    } catch (error) {
        console.log(error);
    }
};

start();