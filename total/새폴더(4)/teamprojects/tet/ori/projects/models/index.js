
const fs = require('fs');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const User = require('./user');
const Post = require('./post');
const Hashtag = require('./hashtag');
const Board = require('./board');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.Board = Board;
db.Sequelize = Sequelize;
Board.init(sequelize);
Board.associate(db)

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Board = Board;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);

Board.init(sequelize);
Board.associate(db)

User.associate(db);
Post.associate(db);
Hashtag.associate(db);

module.exports = db;
