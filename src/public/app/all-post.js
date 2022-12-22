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
			<p class="card-text" id="substrpost${post.id}">
				${post.body.substring(0, 200)}
				<a href="#" class="text-muted" data-component="${post.id}postId">...see more</a>
			</p>
			<!-- <p class="card-text" id="viewpost${post.id}" style="display: none;" >
				${post.body}</p> -->
			<p class="card-footer mb-0">
			<a href="#" class="card-link">Like</a>
			<a href="#" class="card-link">Comment</a>
			<a href="#" class="card-link">Share</a>
			</p>
			</div>
			</div>
			</div>
			`)
			);
		}

		// show Whole Post
		$('p a.text-muted').click((event) => {
			let id = parseInt($(event.target).attr('data-component'));
			// Method 1:
			// $('#content').load('../components/viewFullPost.html');
			// $(`#substrpost${id}`).remove();
			// $(`#viewpost${id}`).removeAttr('style');

			const targetPost = posts.find((post) => post.id === id);
			// Show Whole Post in full page: Method 2:)
			// let div = $('#content');
			// div.html(`
			// <h1 class="text-center pt-2">Full Post</h1>
			// <div class="row" id="posts-container">
			// 	<div class="col"></div>
			// 	<div class="col-8 p-5 mx-5" id="fullPost">
			// 	<div class="card m-2">
			// 	<div class="card-body">
			// 	<h3 class="card-title">${targetPost.title}</h3>
			// 	<h6 class="card-subtitle mb-2 text-muted">${targetPost.user.name}</h6>
			// 	<p class="card-text">
			// 		${targetPost.body}
			// 	</p>
			// 	<a href="#" class="card-link">Like</a>
			// 	<a href="#" class="card-link">Comment</a>
			// 	<a href="#" class="card-link">Share</a>
			// 	</div>
			// 	</div>
			// 	</div>
			// 	<div class="col"></div>
			// </div>
			// `);

			// Show Whole Post by loading a new HTML page: Method 3:)
			$('#content').load('../components/viewFullPost.html', () => {
				$('div#fullPost.card-body').html(`
			    <h3 class="card-title">${targetPost.title}</h3>
			    <h6 class="card-subtitle mb-2 text-muted">${targetPost.user.name}</h6>
			    <p class="card-text">
			    	${targetPost.body}
			    </p>
				`);
			});
		});
	});
}
