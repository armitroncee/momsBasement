const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: {type: String},
  description: { type: String },
  department: {type: String},
  date: { type: Date, default: Date.now }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;