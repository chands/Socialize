const { Router } = require('express');
const {
	createNewPost,
	getAllPosts,
	getPostById
} = require('../../controllers/posts');

const route = Router();

route.get('/', async (req, res) => {
	const userId = req.query.userId;
	const posts = await getAllPosts(userId ? { userId } : {});
	res.status(200).send(posts);
});

// Filter posts using PostId:
route.get('/:postId', async (req, res) => {
	const postId = req.params.postId;
	const post = await getPostById({ postId });
	res.status(200).send(post);
});

// Filter posts for current user
// route.get('/:userId', async (req, res) => {
// 	const userId = req.params.userId;
// 	const posts = await getAllPosts({ userId });
// 	res.status(200).send(posts);
// });

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
