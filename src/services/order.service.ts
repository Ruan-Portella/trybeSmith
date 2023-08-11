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

export default { getAllOrders };