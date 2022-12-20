const { Router } = require('express');
const { createNewPost, getAllPosts } = require('../../controllers/posts');
const { Users } = require('../../db/models');

const route = Router();

route.get('/', async (req, res) => {
	const posts = await getAllPosts();
	res.status(200).send(posts);
});

// Filter posts for current user
route.get('/', async (req, res) => {
	const query = {
		userId: Users.id
	};
	const currentUserPosts = await getAllPosts(query);
	res.status(200).send(currentUserPosts);
});

route.post('/', async (req, res) => {
	const { userId, title, body } = req.body;
	if (!userId || !title || !body) {
		return res.status(400).send({
			message: 'Missing parameters',
			error: 'Need userId, title and body parameter to create a new post'
		});
	}
	const post = await createNewPost(userId, title, body);
	res.status(201).send(post);
});

module.exports = { postsRoute: route };
