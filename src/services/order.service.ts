import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

const getAllOrders = async (): Promise<unknown> => {
  const orders = await OrderModel.findAll({ include: [{ model: ProductModel,
    as: 'productIds',
    attributes: {
      exclude: ['name', 'price', 'orderId'],
    } }] });
  
  const dataValuesOrder = orders.map((order) => order.dataValues);
  const OrderWithProducts = dataValuesOrder.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds?.map((product) => product.id),
  }));

  return OrderWithProducts;
};

const createOrder = async (userId: number, productIds: number[]): Promise<unknown> => {
  const newOrder = await OrderModel.create({ userId });
  const updateProducts = productIds.map((productId) => ProductModel.update({ 
    orderId: newOrder.dataValues.id }, { where: { id: productId } }));
  await Promise.all(updateProducts);
  return { userId, productIds };
};

export default { getAllOrders, createOrder };