import express from 'express';
import productRouter from './routes/product.route';
import orderRouter from './routes/order.route';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;
