import ProductModel, { ProductInputtableTypes, 
  ProductSequelizeModel } from '../database/models/product.model';

const createProduct = async (product: ProductInputtableTypes): Promise<ProductSequelizeModel> => {
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

export default { createProduct };