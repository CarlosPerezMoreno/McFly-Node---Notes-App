const express = require("express");
const app = express();
const morgan = require("morgan");

//Settings
app.set("PORT", process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(app.get("PORT"), () => {
  console.log(`Initialized server on port ${app.get("PORT")}`);
});
