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

export const updateProduct = async (id: string, data: any) => {
  return await ProductModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id: string) => {
  return await ProductModel.findByIdAndDelete(id);
};