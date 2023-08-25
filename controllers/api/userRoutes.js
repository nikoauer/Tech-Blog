//localhost:3001/api/users
const router = require("express").Router();
const { User } = require("../../models");
router.post("/", async (req, res) => {
    try {
        
        console.log("Api endpoint piged to add user");
        const newUser = await User.create(req.body);
        req.session.save(() => {
          req.session.user_id = newUser.id;
          req.session.logged_in = true;
      
          res.status(200).json(newUser);
        });
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
