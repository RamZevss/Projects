const express = require("express");
const router = express.Router();
const passport = require("passport"); 

const {
  addSize,
  updateSize,
  deleteSize,
  getSizes,
} = require("../controllers/sizes");
​
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addSize
);
​
router.put(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  updateSize
);

router.delete(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    deleteSize
)
​
router.get("/", getSizes)
​

module.exports = router;