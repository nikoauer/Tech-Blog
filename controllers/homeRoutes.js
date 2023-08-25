const router = require('express').Router();

//localhost:3001/
router.get('/', (req, res) => {
    console.log("GETTING HOME ROUTE !!!!")
    res.render('home')
})

router.get('/login', (req, res) => {
    console.log("GETTING HOME ROUTE !!!!")
    res.render('login')
})


router.get('/signup', (req, res) => {
    console.log("GETTING HOME ROUTE !!!!")
    res.render('signup')
})

module.exports = router