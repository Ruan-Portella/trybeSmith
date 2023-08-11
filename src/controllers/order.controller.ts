import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { userId, productIds } = req.body;
  const order = await orderService.createOrder(userId, productIds);
  res.status(201).json(order);
};

export default {
  getAllOrders,
  createOrder,
};