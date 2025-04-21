const Product = require("../models/Product");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

exports.add = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    if (!name || !description || !price || !imageUrl) {
      return res.json(new ApiError(400, "Please enter all required fields."));
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      imageUrl,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, "Product added successfully", newProduct));
  } catch (error) {
    return res
      .status(500)
      .json(
        new ApiError(500, "Internal Server Error, please try again later.")
      );
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.json(new ApiError(404, "Product not found."));
    }

    return res.json(
      new ApiResponse(200, "Product fetched successfully!", product)
    );
  } catch (error) {
    return res.json(
      new ApiError(500, "Internal Server Error, please try again later.")
    );
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.json(new ApiError(404, "No products found"));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Products fetched successfully", products));
  } catch (error) {
    console.error(error);
    return res.json(
      new ApiError(500, "Internal Server Error, please try again later.")
    );
  }
};

exports.deleteOne = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.json(new ApiError(404, "Product not found."));
    }

    return res.json(new ApiResponse(204, "Product deleted successfully"));
  } catch (error) {
    return res.json(
      new ApiError(500, "Internal Server Error, please try again later.")
    );
  }
};

exports.updateOne = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, imageUrl } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.json(new ApiError(404, "Product not found."));
    }

    return res.json(
      new ApiResponse(200, "Product updated successfully", updatedProduct)
    );
  } catch (error) {
    console.error(error);
    return res.json(
      new ApiError(500, "Internal Server Error, please try again later.")
    );
  }
};
