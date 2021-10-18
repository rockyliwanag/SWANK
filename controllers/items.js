const Item = require("../models/item");

module.exports = {
  create,
  delete: deleteOne,
  index,
  update,
  show,
  photos
};

// async function create(req, res) {
//     req.body.user = req.user._id;
//     const item = await Item.create(req.body);
//     // User.findById(req.body.userId, (err, user) => {
//     //     user.items.push(item);
//     //     user.save((err, user) => {
//     //         res.status(201).json(user);
//     //     });
//   res.status(201).json(item);
// }

async function index(req, res) {
  const items = await Item.find({user: req.user._id})
  res.status(200).json(items);
}

async function create(req, res) {
  req.body.user = req.user._id;
  const item = await Item.create(req.body);
  // item.photos.push(req.file);
  res.status(201).json(item);
  console.log("INDEX", item, "K: ", req.file)
}

async function photos(req, res) {
  await console.log("Photos: ", req.file)
  res.status(201)
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