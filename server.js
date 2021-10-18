const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/images')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage});

const app = express();

require("dotenv").config();
require("./config/database");

// Routes:
var usersRouter = require("./routes/api/users");
var itemsRouter = require("./routes/api/items");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));


// Put API routes here, before "catch all" route
app.use("/api/users/", usersRouter);
app.use("/api/items/", itemsRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post('/', upload.single('photos'), function (req, res) {
  console.log("TEST",req.file)
})

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});