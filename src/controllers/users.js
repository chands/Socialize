const { Users } = require('../db/models');
const genrateRandomUserName = require('../utils/username');

async function createAnonymousUser() {
    const user = await Users.create({
        name: genrateRandomUserName()
    });
    return user;
}

module.exports = {createAnonymousUser};

/* test code */

/*
async function main() {
    const user = await createAnonymousUser();
    console.log(user.name);
    console.log('--------------------------------');
}

main();
*/