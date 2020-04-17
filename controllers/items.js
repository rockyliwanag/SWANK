const Item = require("../models/item");
const User = require("../models/user");

module.exports = {
    create,
    delete: deleteOne,
    index,
    update,
    show,
};

async function create(req, res) {
    const item = await Item.create(req.body.item);
    console.log(req.body);
    User.findById(req.body.id, (err, user) => {
        console.log('USER IS', user);
        user.items.push(item);
        user.save((err, user) => {
            res.status(201).json(user);
        });
    });
    //   res.status(201).json(item);
}

async function show(req, res) {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
}

async function index(req, res) {
    await User.findById(req.params.userId)
        .populate("items")
        .exec(function (err, user) {
            res.send(user.items);
        });
    // console.log(user);
    // const items = await Item.find({});
    // res.status(200).json(items);
}

async function deleteOne(req, res) {
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItem);
}

async function update(req, res) {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedItem);
}