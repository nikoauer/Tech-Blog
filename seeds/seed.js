const sequelize = require('../config/connection');
const { User, Blogpost } = require('../models/index');

const blogpostData = require('./Blogpostdata.json');
const userData = require('./userdata.json');

//seeds the database with mock users and blogposts retrieved from userdata and blogpostdata
const seedData = async () => {
    await sequelize.sync({ force: true })

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    
      for (const blog of blogpostData) {
        await Blogpost.create({
          ...blog,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
      process.exit(0);
      console.log("success this worked");
}

seedData();