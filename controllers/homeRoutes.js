const router = require('express').Router();
const { Blogpost, User, Comments } = require('../models/index')

//localhost:3001/
router.get('/', async (req, res) => {
    try {
      const Blogpostdata = await Blogpost.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
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


// router.get('/', (req, res) => {
//     res.render('home')
// })

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/login', async (req,res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.
        res.redirect('/login');
        return;
    }
    res.render('login');
})


module.exports = router