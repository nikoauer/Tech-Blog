const router = require('express').Router();

//localhost:3001/
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/login', (req, res) => {
    res.render('login')
})


router.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = router