import { ProductModel } from "../models/product.model.js";
export const createProduct = async (data) => {
    const product = new ProductModel(data);
    return await product.save();
};
export const getProducts = async () => {
    return await ProductModel.find();
};
export const getProductById = async (id) => {
    return await ProductModel.findById(id);
};
export const updateProduct = async (id, data) => {
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
};
export const deleteProduct = async (id) => {
    return await ProductModel.findByIdAndDelete(id);
};
