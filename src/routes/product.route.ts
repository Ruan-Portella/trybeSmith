import express from 'express';
import productController from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getAllProducts);

export default productRouter;