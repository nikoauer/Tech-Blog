 const router = require("express").Router()
//localhost:3001/api
const userRoutes = require("./userRoutes")
router.use("/users", userRoutes)

module.exports = router