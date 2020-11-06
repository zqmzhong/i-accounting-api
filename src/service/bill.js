const dynamodb = require('../dynamodb');
const { nanoid } = require('nanoid');

const TableName = process.env.DYNAMODB_TABLE;

async function getAllBills(ctx) {
    const params = { TableName };
    const { Items } = await dynamodb.scan(params).promise();
    ctx.body = Items;
}

async function getBillById(ctx) {
    const { id } = ctx.params;
    const params = {
        TableName,
        Key: { id },
    };
    const { Item } = await dynamodb.get(params).promise();
    ctx.body = Item;
}

async function createBill(ctx) {
    const body = ctx.request.body;
    const { time, amount, type, category, account, note } = body;
    const id = nanoid(11);
    const params = {
        TableName,
        Item: { id, time, amount, type, category, account, note },
    };
    await dynamodb.put(params).promise();
    ctx.body = { id, ...body };
}

module.exports = {
    getAllBills,
    getBillById,
    createBill
};
