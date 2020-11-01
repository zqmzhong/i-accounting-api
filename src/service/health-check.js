const fs = require('fs');

function index(ctx) {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./public/index.html');
}

function health(ctx) {
    ctx.body = "Hello World!";
}

module.exports = { index, health };
