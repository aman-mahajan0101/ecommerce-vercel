const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../../middleware");
const User = require("../../models/user");

router.post("/user/:productid/dec/cart", async (req, res) => {
  const { productid } = req.params;
  const userid = req.user._id;
  const user = await User.findById(userid);

  //Code for 0 items to be order it should delete that item but it is not happening
  if (user.cart.qty === 1) {
    await axios.delete("/user/:productid/cart");
  } else {
    const newCartArray = user.cart.map((product) => {
      return product.item.equals(productid) ? { item: product.item, qty: product.qty - 1 } : product;
    });
    user.cart.splice(0, user.cart.length);
    user.cart.push(...newCartArray);
    await user.save();
  }

  res.redirect("/user/cart");
});

router.post("/user/:productid/inc/cart", async (req, res) => {
  const { productid } = req.params;
  const userid = req.user._id;
  const user = await User.findById(userid);

  const newCartArray = user.cart.map((product) => {
    return product.item.equals(productid) ? { item: product.item, qty: product.qty + 1 } : product;
  });
  user.cart.splice(0, user.cart.length);
  user.cart.push(...newCartArray);
  await user.save();

  res.redirect("/user/cart");
});

router.delete("/user/:productid/cart", async (req, res) => {
  try {
    const { productid } = req.params;
    const userid = req.user._id;

    const user = await User.findById(userid);
    await User.findByIdAndUpdate(user._id, { $pull: { cart: { item: productid } } });

    res.redirect(`/user/cart`);
  } catch (e) {
    console.error(e);
    req.flash("error", e.message);
    res.redirect("/error");
  }
});

module.exports = router;
