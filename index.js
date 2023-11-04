import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
const app = express();
//middleware for parsing request body (data in json)
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to my first MERN stack application");
});
// router for code refactoring
app.use("/books", booksRoute);
//connected to database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
