import express from 'express';
import productController from '../controllers/product.controller';
import nameValidation from '../middlewares/name.validations';
import priceValidation from '../middlewares/price.validations';

const productRouter = express.Router();

productRouter.post('/', nameValidation, priceValidation, productController.createProduct);
productRouter.get('/', productController.getAllProducts);

export default productRouter;