const router = require('express').Router();

//localhost:3001/
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/login', (req, res) => {
    res.render('login')
})




module.exports = router