const { nanoid } = require('nanoid');
const dynamodb = require('../dynamodb');

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

    let status = true;
    await dynamodb.put(params).promise().catch(error => {
        console.error(error);
        status = false;
    });

    ctx.body = {
        status,
        data: { id, ...body }
    };
}

async function updateBill(ctx) {
    const { id } = ctx.params;
    const { time, amount, type, category, account, note } = ctx.request.body;
    const params = {
        TableName,
        Item: { id, time, amount, type, category, account, note },
        ReturnValues: 'ALL_OLD',
    };

    let status = true;
    await dynamodb.put(params).promise().catch(error => {
        console.error(error);
        status = false;
    });

    ctx.body = { status };
}

async function deleteBill(ctx) {
    const { id } = ctx.params;
    const params = {
        TableName,
        Key: { id },
    };

    let status = true;
    await dynamodb.delete(params).promise().catch(error => {
        console.error(error);
        status = false;
    });
    ctx.body = {
        status,
    };
}

module.exports = {
    getAllBills,
    getBillById,
    createBill,
    updateBill,
    deleteBill,
};
