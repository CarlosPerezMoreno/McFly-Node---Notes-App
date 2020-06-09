const express = require("express");
const _ = require("lodash");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//Settings
app.set("PORT", process.env.PORT || 5000);
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use(require("./routes/index"));

app.listen(app.get("PORT"), () => {
  console.log(`Initialized server on port ${app.get("PORT")}`);
});
