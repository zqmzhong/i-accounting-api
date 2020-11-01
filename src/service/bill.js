const dynamodb = require('../dynamodb');

const TableName = process.env.DYNAMODB_TABLE;

async function getAllBills(ctx) {
    const params = { TableName };
    const { Items } = await dynamodb.scan(params).promise();
    ctx.body = JSON.stringify(Items);
}

module.exports = { getAllBills }; 
