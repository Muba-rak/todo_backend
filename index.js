require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRouter = require("./routes/todoRouter");

app.use(express.json());
app.use("/todo", todoRouter);
//app.use(todoRouter);
//db connection
mongoose
  .connect(process.env.db_url)
  .then(() => {
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => console.log(err));
