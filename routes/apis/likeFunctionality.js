const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../../middleware");
const User = require("../../models/user");

router.post("/user/:productid/like", isLoggedIn, async (req, res) => {
  const { productid } = req.params;
  const user = req.user;
  const isLiked = user.wishList.includes(productid);

  if (isLiked) {
    req.user = await User.findByIdAndUpdate(req.user._id, { $pull: { wishList: productid } });
  } else {
    req.user = await User.findByIdAndUpdate(req.user._id, { $addToSet: { wishList: productid } });
  }

  res.status(200).json({ id: productid, message: "Liked the product Successfully" });
});

module.exports = router;
