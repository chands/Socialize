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
	$('#content').load('../components/all-posts.html'); // this contains it's own scripts too.
	$('#footer').load('../components/footer.html');
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
