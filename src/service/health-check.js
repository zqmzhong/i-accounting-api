function health(ctx) {
    ctx.body = "i-accounting-api is running on AWS lambda. " + new Date().toLocaleString();
}

module.exports = { health };
