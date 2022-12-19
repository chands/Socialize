$(document).ready(() => {
	$('#navbar').load('../components/navbar.html', () => {
		$('#logIn').click(() => {
			let currentUser = loginIfNeeded();
			// remove the login and register buttons
			$('#logInRegister').remove();
			// Show the user name after logIn completes
			var div = $('#loggedInUser');
			// Set the HTML inside the element
			div.html(`<button type="button" class="btn btn-outline-primary">
			<i class="fa-solid fa-user"></i> ${currentUser.name}</button>`);
			// Alternative: load a html file with above html content here.
		});
	});
	$('#footer').load('../components/footer.html');
	$('#content').load('../components/all-posts.html', loadPosts);
});

function loginIfNeeded() {
	let currentUser = window.localStorage.user
		? JSON.parse(localStorage.user)
		: null;
	if (!currentUser) {
		$.post('/api/users', (user) => {
			console.log('registered current user as ', user.name);
			window.localStorage.user = JSON.stringify(user);
			currentUser = user;
		});
	} else {
		console.log('logged in as ', currentUser.name);
	}
	return currentUser;
}

function loadPosts() {
	$.get('/api/posts', (posts) => {
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
}
