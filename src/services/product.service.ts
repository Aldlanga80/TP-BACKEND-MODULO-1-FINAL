import { ProductModel } from "../models/product.model";

export const createProduct = async (data: {
  name: string;
  price: number;
  category: string;
  stock: number;
}) => {
  const product = new ProductModel(data);
  return await product.save();
};

export const getProducts = async () => {
  return await ProductModel.find();
};

export const getProductById = async (id: string) => {
  return await ProductModel.findById(id);
};

