const { Posts, Users } = require('../db/models');

/**
 * Create new post by a user with the given userId
 * @param {number} userId
 * @param {Text} title
 * @param {Text} body
 */
async function createNewPost(userId, title, body) {
	const post = await Posts.create({
		title,
		body,
		userId
	});

	return post;
}

/**
 * Show all posts:
 * getAllPosts({username: ''})
 * getAllPosts({title: ''})
 *
 */
async function getAllPosts(query) {
	const posts = await Posts.findAll({
		where: {
			...query // ...query: handle query params
		},
		include: [Users] // ...include works only when relations exists between models
	});
	return posts;
}

module.exports = {
	createNewPost,
	getAllPosts
};

/* Test post */
/*
async function test() {
  //create new post

  // console.log(
  //     await createNewPost(
  //         1,
  //         'Sample Post',
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in'
  //     )
  // ),
  // console.log(
  //     await createNewPost(
  //         2,
  //         'Another Sample post',
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in'
  //     )
  // )

  //fetch posts

  const posts = await getAllPosts();
  for (let p of posts) {
    console.log(`
        title: ${p.title}
        body: ${p.body}
        Author: ${p.user.name}
        ============================`);
  }
}

test();
*/
