const Item = require('../models/item');

module.exports = {
    create
};

async function create(req, res) {
    console.log('getting here');
    const item = await Item.create(req.body);
    res.status(201).json(item);
}