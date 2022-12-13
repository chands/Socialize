const { Router } = require('express');
const {
	createAnonymousUser,
	getUserById,
	getUserByUserName
} = require('../../controllers/users');

const route = Router();

route.get('/:id', async (req, res) => {
	let user;
	if (isNaN(parseInt(req.params.id))) {
		// when params is username
		user = await getUserByUserName(req.params.id);
	} else {
		//when params is user id
		user = await getUserById(req.params.id);
	}

	if (user) {
		res.status(200).send(user);
	} else {
		res.status(404).send({
			error: 'No such user id or username'
		});
	}
});

route.post('/', async (req, res) => {
	const user = await createAnonymousUser();
	res.status(201).send(user);
});

module.exports = { usersRoute: route };
