 const router = require("express").Router()

const userRoutes = require("./userRoutes")
const dashboardRoutes = require("./dashboardRoutes")
const commentRoutes = require("./commentRoutes")

router.use("/users", userRoutes)
router.use("/comments", commentRoutes)
router.use("/dashboard", dashboardRoutes)

module.exports = router