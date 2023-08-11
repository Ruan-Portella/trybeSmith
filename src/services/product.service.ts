import ProductModel, { ProductInputtableTypes, 
  ProductSequelizeModel } from '../database/models/product.model';

const createProduct = async (product: ProductInputtableTypes): Promise<ProductSequelizeModel> => {
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

const getAllProducts = async (): Promise<ProductSequelizeModel[]> => {
  const products = await ProductModel.findAll();
  return products;
};

export default { createProduct, getAllProducts };