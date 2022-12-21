$(document).ready(async () => {
	const posts = await getPosts();
	for (let post of posts) {
		$('#posts-container').append(
			$(`
		<div class="col-4">
		<div class="card m-2">
		<div class="card-body">
		<h5 class="card-title">${post.title}</h5>
		<h6 class="card-subtitle mb-2 text-muted">${post.user.name}</h6>
		<p class="card-text">
			${post.body.substring(0, 200)}
			<a href="#" class="text-muted">...see more</a>
		</p>
		<a href="#" class="card-link">Like</a>
		<a href="#" class="card-link">Comment</a>
		<a href="#" class="card-link">Share</a>
		</div>
		</div>
		</div>
		`)
		);
	}
});
async function getPosts() {
	const currentUser = loginIfNeeded();
	const response = await fetch(`/api/posts?userId=${currentUser.id}`);
	const posts = await response.json();
	return posts;
}

// function loadMyPosts() {
// 	const currentUser = loginIfNeeded();
// 	$.get('/api/posts', (posts) => {
// 		for (let post of posts) {
// 			$('#posts-container').append(
// 				$(`
// 			<div class="col-4">
// 			<div class="card m-2">
// 			<div class="card-body">
// 			<h5 class="card-title">${post.title}</h5>
// 			<h6 class="card-subtitle mb-2 text-muted">${post.user.name}</h6>
// 			<p class="card-text">
// 				${post.body.substring(0, 200)}
// 				<a href="#" class="text-muted">...see more</a>
// 			</p>
// 			<a href="#" class="card-link">Like</a>
// 			<a href="#" class="card-link">Comment</a>
// 			<a href="#" class="card-link">Share</a>
// 			</div>
// 			</div>
// 			</div>
// 			`)
// 			);
// 		}
// 	});
// }
