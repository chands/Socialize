$(document).ready(() => {
    $('#goBack').click(() => {
        // window.history.back();
        $('#content').load('../components/all-posts.html');
    });
})