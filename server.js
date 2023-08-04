const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

// parse applicatian/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// panggil routes
const routes = require("./routes");
routes(app);

app.listen(port, () => {
  console.log(`Server Berjalan Dengan Port${port}`);
});
