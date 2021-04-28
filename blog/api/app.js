const express = require("express");
const app = express();
app.use(express.static(__dirname + '/'));

app.use(express.static('public'));
app.listen(3000, () => {
  console.log("Server running - port " + 3000);
})
