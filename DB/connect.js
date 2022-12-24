const mongoose = require('mongoose')
const { options } = require('../routes/products')


mongoose.set("strictQuery", false);

const connectDB = (uri) => {
    console.log("connected to mongo!");
   return mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology:true,
   });
}

module.exports = connectDB;