//localhost:3001/api/users
const router = require("express").Router();
const { User } = require("../../models/index");

router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await User.create({
      username,
      email,
      password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json({ message: 'New user created!'});
    });

  console.log("successfully sign up", newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'You have an error'});
    }
});

router.post('/login', async (req, res) => {
  try {
    const userLogin = await User.findOne({ where: { email: req.body.email } });
    
    if (!userLogin) {
      res.status(400).json({ message: 'Invalid password or email, try again' });
      return;
    }
    const validPassword = await userLogin.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password or email, try again' });
      return;
    }
    req.session.save(() => {
      req.session.username = userLogin.username;
      req.session.logged_in = true;
      res.status(200).json({ message: 'User has logged in'});
    });

    console.log("successfully logged in", );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
  });

module.exports = router;
