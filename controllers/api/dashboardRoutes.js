const { Blogpost } = require("../../models")
const withAuth = require("../../utils/auth")
const router = require("express").Router()

router.post("/", withAuth, async(req,res)=>{
    try {
        const newPost = await Blogpost.create({...req.body, user_id: req.session.user_id})
        res.json(newPost)
    } catch (error) {
        console.log(error)
        res.status(400).json("Backend blogpost post not working")
    }
})

router.delete('/delete-post', async (req, res) => {
    try {
        const postId = req.body.Blogpost_id;
        console.log(postId)

        const deletePost = await Blogpost.destroy({
            where: { id: postId }
            })
        res.sendStatus(200).send
    } catch (error) {
        console.error(error);
        res.sendStatus(500); 
    }
});


module.exports = router