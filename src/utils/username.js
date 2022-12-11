//Generate Random User Name
const ADJECTIVES = [
    'plucky', 'juicy', 'grubby', 'macho', 'flimsy', 'zany', 'hushed', 'nippy', 'meek', 'dazzling', 'gloomy', 'savory', 'mushy', 'premium', 'exotic'
];

const OBJECTS = [
    'scissors', 'glass', 'window', 'chapstick', 'toilet', 'rug', 'chair', 'box', 'computer', 'ruler', 'clipboard', 'folder', 'table', 'phone', 'car'
];

function genrateRandomUserName() {
    return `${ADJECTIVES[Math.floor(Math.random()*15)]}-${OBJECTS[Math.floor(Math.random()*15)]}`;
}
module.exports = genrateRandomUserName;

// Always test your code piece by piece
// console.log(genrateRandomUserName());