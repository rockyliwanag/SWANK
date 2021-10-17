const Item = require("../models/item");

module.exports = {
  create,
  delete: deleteOne,
  index,
  update,
  show,
};

// async function create(req, res) {
//     req.body.user = req.user._id;
//     const item = await Item.create(req.body);
//     console.log('sum-in: ', req.body)
//     // User.findById(req.body.userId, (err, user) => {
//     //     console.log('USER IS', user);
//     //     user.items.push(item);
//     //     user.save((err, user) => {
//     //         res.status(201).json(user);
//     //     });
//   res.status(201).json(item);
// }

async function index(req, res) {
  const items = await Item.find({user: req.user._id})
  res.status(200).json(items);
  // console.log("INDEX", res)
}

async function create(req, res) {
  req.body.user = req.user._id;
  const item = await Item.create(req.body);
  res.status(201).json(item);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.status(200).json(item);
}


async function deleteOne(req, res) {
  const deletedItem = await Item.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedItem);
}

async function update(req, res) {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(updatedItem);
}