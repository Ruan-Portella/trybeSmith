import express from 'express';
import orderController from '../controllers/order.controller';
import authValidation from '../middlewares/auth.validations';
import userValidation from '../middlewares/user.validations';
import productValidation from '../middlewares/product.validations';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAllOrders);
orderRouter.post(
  '/', 
  authValidation, 
  userValidation,
  productValidation, 
  orderController.createOrder,
);

export default orderRouter;