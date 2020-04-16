const Item = require('../models/item');

module.exports = {
    create,
    delete: deleteOne,
    index
};

async function create(req, res) {
    console.log('getting here');
    const item = await Item.create(req.body);
    res.status(201).json(item);
}

async function index(req, res) {
    const items = await Item.find({});
    res.status(200).json(items);
}

async function deleteOne(req, res) {
  const deletedItem = await Item.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedItem);
}