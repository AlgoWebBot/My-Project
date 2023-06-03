const express = require('express');
const app = express();
const multer = require('multer');

//upload file
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/")
  },

  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname; 
    cb(null, fileName)
  },
})

const upload = multer({storage: storage})



//routing work
app.get("/", (req, res) => {
  res.send("Hello server to upload a file to server");
})

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/register", upload.array("data", 2), (req, res) => {
  res.send("file uploaded successfully!!!");
})
app.listen(3200);