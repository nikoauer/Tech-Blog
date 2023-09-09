const { Blogpost } = require("../../models")
const withAuth = require("../../utils/auth")
const router = require("express").Router()

router.post("/", withAuth, async(req,res)=>{
    try {
        const newPost = await Blogpost.create({...req.body, user_id: req.session.user_id})
        console.log(newPost)
        res.json(newPost)
    } catch (error) {
        console.log(error)
        res.status(400).json("Backend blogpost post not working")
    }
})


module.exports = router