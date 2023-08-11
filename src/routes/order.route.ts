import express from 'express';
import orderController from '../controllers/order.controller';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAllOrders);

export default orderRouter;