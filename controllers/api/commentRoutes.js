const { Comments } = require("../../models")
const withAuth = require("../../utils/auth")
const router = require("express").Router()

router.post("/", withAuth, async(req,res)=>{
    try {
        const newComment = await Comments.create({...req.body, user_id: req.session.user_id})
        console.log(newComment)
        res.json(newComment)
    } catch (error) {
        console.log(error)
        res.status(400).json("Backend Comment post not working")
    }

})

module.exports = router