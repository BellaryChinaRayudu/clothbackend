import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { deleteProduct } from "./controllers/products.js";

import { signIn } from "./controllers/login.js";
import cors from "cors";

dotenv.config();

import { getProducts, createProduct } from "./controllers/products.js";

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());

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
app.delete("/api/deleteProduct", deleteProduct);

app.listen(port, () => {
  console.log("connected successfully on port", port);
});
