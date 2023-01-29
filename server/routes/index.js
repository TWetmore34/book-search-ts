const router = require("express").Router()
const wishlistRoutes = require("./wishlistRoutes")
const userRoutes = require('./userRoutes')
const auth = require("../utils/auth")
router.use("/wishlist",auth, wishlistRoutes)
router.use("/users", userRoutes)
module.exports = router