const path  = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  res.send({
    result: parseInt(num1) +  parseInt(num2)
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000.');
});
