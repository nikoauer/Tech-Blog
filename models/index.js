const User = require("./User");
const Blogpost = require("./Blogpost");
const Comments = require("./Comments");

User.hasMany( Blogpost, {
    foreignKey: 'user_id',
});

User.hasMany( Comments, {
    foreignKey: 'user_id',
});

Blogpost.belongsTo( User, {
    foreignKey: 'user_id'
})

Blogpost.belongsTo( User, {
    foreignKey: 'user_id'
})

module.exports = { User, Blogpost, Comments };