const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize({
	database: 'socializedb',
	username: 'SocializeAdmin',
	password: 'Admin@Socializedb',
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

const ID_DEF = {
	type: DataTypes.INTEGER,
	autoIncrement: true,
	primaryKey: true
};
const USERNAME_DEF = {
	type: DataTypes.STRING(30),
	unique: true,
	allowNull: false
};
const TITLE_DEF = {
	type: DataTypes.STRING(50),
	allowNull: false
};

const Users = db.define('user', {
	id: ID_DEF,
	name: USERNAME_DEF
});

const Posts = db.define('post', {
	id: ID_DEF,
	title: TITLE_DEF,
	body: {
		type: DataTypes.TEXT,
		allowNull: false
	}
});

const Comments = db.define('comment', {
	id: ID_DEF,
	title: TITLE_DEF,
	body: {
		type: DataTypes.TEXT('tiny')
	}
});

//relationships
Users.hasMany(Posts);
Posts.belongsTo(Users); //posts will have foreignKey userId

Users.hasMany(Comments);
Comments.belongsTo(Users); //comments will have foreignKey userId

Posts.hasMany(Comments);
Comments.belongsTo(Posts); //comments will have foreignKey postId

module.exports = {
	db,
	Users,
	Posts,
	Comments
};
