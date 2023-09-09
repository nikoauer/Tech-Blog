const { Blogpost } = require("../../models")
const withAuth = require("../../utils/auth")
const router = require("express").Router()

//this route will create a new blogpost, taking user input from the frontend
router.post("/", withAuth, async(req,res)=>{
    try {
        const newPost = await Blogpost.create({...req.body, user_id: req.session.user_id})
        res.json(newPost)
    } catch (error) {
        console.log(error)
        res.status(400).json("Backend blogpost post not working")
    }
})

//this route will delete the respective post
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

//this route is responsible for taking in front end input and updating the post with the contents
router.put('/update-post/:postId', async (req, res) => {
    try {
      const postId = req.params.postId;
      const { title, description } = req.body;

      const updatedPost = await Blogpost.update(
        { title, description },
        { where: { id: postId } }
      );
  
      if (updatedPost[0] === 1) {
        res.sendStatus(200); 
      } else {
        res.status(404).send("Post not found");
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

module.exports = router