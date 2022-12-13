const { Users } = require('../db/models');
const genrateRandomUserName = require('../utils/username');

// Generate a random user name
async function createAnonymousUser() {
	const user = await Users.create({
		name: genrateRandomUserName()
	});
	return user;
}

// get user by Id
async function getUserById(id) {
	return await Users.findOne({ where: { id } });
}

// get user by username
async function getUserByUserName(name) {
	return await Users.findOne({ where: { name } });
}
module.exports = {
	createAnonymousUser,
	getUserById,
	getUserByUserName
};

/* test code */

/*
async function main() {
    const user = await createAnonymousUser();
    console.log(user.name);
    console.log('--------------------------------');
}

main();
*/
