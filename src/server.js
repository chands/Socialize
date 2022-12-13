const express = require('express');
const path = require('path');
const port = 8090;

const { db } = require('./db/models');
const { usersRoute } = require('./routes/users');
const { postsRoute } = require('./routes/posts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);
app.use('/', express.static(path.join(__dirname + '/public')));

db.sync()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server listening on port ${port}`);
		});
	})
	.catch((err) => {
		console.error(err);
	});
