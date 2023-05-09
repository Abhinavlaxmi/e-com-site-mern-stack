const mongoose  = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price : String,
    category: String,
    description:String,
    company: String,
    image: String,
    userId: String,
    brand: String,
});

module.exports = mongoose.model("products", ProductSchema)
 