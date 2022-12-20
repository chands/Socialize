$(document).ready(() => {
	const title = $('#title');
	const postBody = $('#postBody');
	const btnWritePost = $('#writePost');
	const currentUser = loginIfNeeded();

	btnWritePost.click(() => {
		writePost({
			title: title.val(),
			body: postBody.val(),
			userId: currentUser.id
		});
	});
});

/**
 *
 * @param {{title: string, body: string, userId: number}} payload
 */
function writePost(payload) {
	$.post('/api/posts', payload);
}
