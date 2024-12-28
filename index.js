import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { signIn } from "./controllers/login.js";

dotenv.config();

import { getProducts, createProduct } from "./controllers/products.js";

const app = express();

const port = process.env.PORT || 8000;

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDb is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

connectToDb();

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Working");
});

app.post("/api/create", createProduct);
app.post("/api/getProducts", getProducts);
app.post("/api/login", signIn);

app.listen(port, () => {
  console.log("connected successfully on port", port);
});
