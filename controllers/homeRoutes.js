const router = require('express').Router();
const { Blogpost, User, Comments } = require('../models/index')
const withAuth = require("../utils/auth")

//localhost:3001/
// this route displays the home page blogposts with the title and date created
router.get('/', async (req, res) => {
    try {
      const Blogpostdata = await Blogpost.findAll();
  
      // Serialize data so the template can read it
      const Blogposts = Blogpostdata.map((blogpost) => blogpost.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('home', { 
        Blogposts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/blogpost/:id', async (req, res) => {
  try {
    const Blogpostdata = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      {
        model:Comments,
        include : {
          model: User,
          attributes: ['username'],
        }
      }
      ],
    });

    const Blogposts = Blogpostdata.get({ plain: true });
    console.log("Successfully displaying blogpost")
    res.render('blogpost', {
      ...Blogposts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
      const userId = req.session.user_id

      const usersPosts = await Blogpost.findAll({
      where: { user_id: userId }
      })

      const Posts = usersPosts.map(post => post.get({ plain: true }));

      console.log(Posts)
      res.render('dashboard', {
        Posts: Posts,
        logged_in: req.session.logged_in
    })
    console.log("THIS IS WORKING!!!!!!!!!!!!!!!!!!!!!");
  } catch (err) {
    console.log(err)
  }
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/login', async (req,res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('/');
})


module.exports = router