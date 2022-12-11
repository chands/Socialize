const express = require('express');
const port  = 8090;
const { db } = require('./db/models');

const app = express();



db.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}).catch((err) => {
    console.error(err);
});