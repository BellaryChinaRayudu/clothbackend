import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  const { category } = req.body;

  const products = await Product.find({ category });

  res.status(200).json(products);
};

export const createProduct = async (req, res) => {
  for (let i = 0; i < req.body.data.length; i++) {
    const { category, imageUrl, name, price } = req.body.data[i];
    const data = new Product({ category, imageUrl, name, price });
    await data.save();
  }

  res.status(200).json("Product created successfully");
};
