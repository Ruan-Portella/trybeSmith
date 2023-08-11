import ProductModel, { ProductInputtableTypes } from "../database/models/product.model";

const createProduct = async (product: ProductInputtableTypes) => {
    const newProduct = await ProductModel.create(product);
    return newProduct;
}

export default { createProduct }