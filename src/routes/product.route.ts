const productRouter = require('express').Router();
import productController from "../controllers/product.controller";

productRouter.post('/', productController.createProduct);

export default productRouter;