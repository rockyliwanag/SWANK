const Item = require('../models/item');

module.exports = {
    create
};

async function create(req, res) {
    const item = await Item.create(req.body);
    res.status(201).json(item);
}