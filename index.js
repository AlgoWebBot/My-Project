const express = require('express');
const app = express();
const multer = require('multer');

//upload and save data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
      const fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName)
  }
})

const upload = multer({ storage: storage })


//routing
app.get("/", (req, res) => {
    res.send('Hello Server :) <br> <a href="/register"> upload file </a>');
})

app.get("/register", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html");
})

app.post("/register", upload.single("data"), (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html");
})


app.listen(8085);