const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const app = express();

// bring in route
const postRoutes = require("./routes/post.js");

dotenv.config();
const port = process.env.PORT;

// db
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected, node-api-cluster"));

mongoose.connection.on("error", (err) => console.log(`DB connection error: ${err}`));

// middleware
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

app.listen(port, () => console.log(`SERVER running at port: ${port}`));
