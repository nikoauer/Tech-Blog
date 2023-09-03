const router = require('express').Router();

//localhost:3001/
router.get('/', (req, res) => {
    res.render('home')
})

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