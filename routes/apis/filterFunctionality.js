const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../../middleware");
const Product = require("../../models/product");

router.get("/products/filtered/:value", isLoggedIn, async (req, res) => {
  const { value } = req.params;
  console.log(value);

  if (value === "Price:Low to High") {
    const products = await Product.find({}).sort({ price: 1 });
    res.render("products/index", { products });
  } else if (value === "Price:High to Low") {
    const products = await Product.find({}).sort({ price: -1 });
    res.render("products/index", { products });
  } else if (value === "Ratings") {
    const products = await Product.find({}).sort({ avgRating: 1 });
    res.render("products/index", { products });
  } else {
    console.log("Incorrect Filter option");
  }
});

module.exports = router;
